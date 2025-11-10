import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { supabase } from "../utils/supabaseClient";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/form.css";

export default function BookingForm() {
    const { cart, clearCart } = useCart();
    const location = useLocation();
    const navigate = useNavigate();

    // Use cart from context or location state
    const currentCart = location.state?.cart || cart;
    const total = currentCart.reduce((sum, i) => sum + i.price, 0);

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentCart.length === 0) {
            return alert("Din varukorg är tom!");
        }

        const bookingData = {
            ...formData,
            services: currentCart.map(i => ({ id: i.id, name: i.name, price: i.price })), // store as array
            price_total: total,
            status: "pending",
            created_at: new Date().toISOString(),
        };

        try {
            // 1️⃣ Save booking in Supabase
            const { error } = await supabase.from("bookings").insert([bookingData]);
            if (error) throw error;

            // 2️⃣ Call Netlify function to create Stripe checkout session
            const res = await fetch("/.netlify/functions/create-checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: currentCart }),
            });

            const data = await res.json();
            if (!data.url) throw new Error("Checkout session failed");

            // 3️⃣ Clear cart and redirect to Stripe
            clearCart();
            window.location.href = data.url;
        } catch (err) {
            console.error(err);
            alert("Ett fel uppstod vid bokning. Försök igen.");
        }
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

