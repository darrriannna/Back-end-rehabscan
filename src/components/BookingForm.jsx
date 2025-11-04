import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { supabase } from "../utils/supabaseClient";
import "../styles/form.css";

export default function BookingForm() {
    const { cart, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        personnummer: "",
        city: "",
        address: "",
        postcity: "",
        postnum: "",
        message: "",
    });

    const total = cart.reduce((sum, i) => sum + i.price, 0);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookingData = {
            ...formData,
            services: cart.map(i => i.name).join(", "),
            price_total: total,
        };

        // Save to Supabase
        const { error } = await supabase.from("bookings").insert([bookingData]);
        if (error) {
            alert("Fel vid sparande av bokning!");
            console.error(error);
            return;
        }

        // Call backend (Stripe checkout)
        const res = await fetch("/.netlify/functions/create-checkout", {
            method: "POST",
            body: JSON.stringify({ cart }),
        });
        const { url } = await res.json();
        clearCart();
        window.location.href = url; // Redirect to Stripe
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <h2>Kundinformation</h2>
            <input name="name" placeholder="Förnamn" onChange={handleChange} required />
            <input name="lastname" placeholder="Efternamn" onChange={handleChange} required />
            <input name="email" placeholder="E-post" type="email" onChange={handleChange} required />
            <input name="phone" placeholder="Telefonnummer" onChange={handleChange} required />
            <input name="personnummer" placeholder="Personnummer" onChange={handleChange} required />
            <input name="address" placeholder="Adress" onChange={handleChange} required />
            <input name="postcity" placeholder="Postort" onChange={handleChange} required />
            <input name="postnum" placeholder="Postnummer" onChange={handleChange} required />
            <textarea name="message" placeholder="Meddelande (valfritt)" onChange={handleChange} />
            <p><strong>Totalt:</strong> {total} kr</p>
            <button type="submit">Gå till betalning</button>
        </form>
    );
}
