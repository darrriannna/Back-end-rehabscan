import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { supabase } from "../utils/supabaseClient";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/form.css";

// EMAILJS
import emailjs from "@emailjs/browser";

export default function BookingForm() {
    const { cart, clearCart } = useCart();
    const location = useLocation();
    const navigate = useNavigate();

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
        acceptPrivacy: false,
        acceptTerms: false,
    });

    function validatePhone(phone) {
        const cleaned = phone.replace(/\s+/g, "");
        return /^(\+46|0)(7\d{8})$/.test(cleaned);
    }

    function validatePersonnummer(pnr) {
        const swedishRegex = /^\d{6}[-]?\d{4}$/;
        const danishRegex = /^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])\d{2}-\d{4}$/;

        return swedishRegex.test(pnr) || danishRegex.test(pnr);
    }

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentCart.length === 0) {
            return alert("Din varukorg är tom!");
        }

        if (!validatePhone(formData.phone)) {
            return alert("Ogiltigt telefonnummer.");
        }

        if (!validatePersonnummer(formData.personnummer)) {
            return alert("Ogiltigt personnummer.");
        }

        if (!formData.acceptPrivacy) {
            return alert("Du måste godkänna integritetspolicyn.");
        }

        if (!formData.acceptTerms) {
            return alert("Du måste godkänna villkoren.");
        }

        // ---- FORMAT SERVICES FOR EMAIL ----
        const formattedServices = currentCart
            .map((s) => `• ${s.name} – ${s.price} kr`)
            .join("\n");

        // ---- EMAILJS PAYLOAD ----
        const emailPayload = {
            name: formData.name,
            lastname: formData.lastname,
            email: formData.email,
            phone: formData.phone,
            personnummer: formData.personnummer,
            address: formData.address,
            postnum: formData.postnum,
            postcity: formData.postcity,
            message: formData.message || "Inget meddelande",
            services: formattedServices,
            total,
        };

        try {
            // 1️⃣ Save to Supabase
            const bookingData = {
                ...formData,
                services: currentCart.map((i) => ({
                    id: i.id,
                    name: i.name,
                    price: i.price,
                })),
                price_total: total,
                status: "pending",
                created_at: new Date().toISOString(),
            };

            const { error } = await supabase
                .from("bookings")
                .insert([bookingData]);

            if (error) throw error;

            // 2️⃣ SEND EMAIL (DO NOT AWAIT — but safe)
            emailjs
                .send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    emailPayload,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                )
                .then(() => console.log("Email skickat!"))
                .catch((err) => console.error("EmailJS error:", err));

            // 3️⃣ STRIPE CHECKOUT
            const res = await fetch("/.netlify/functions/create-checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items: currentCart }),
            });

            const data = await res.json();
            if (!data.url) throw new Error("Checkout session failed");

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
            <input name="personnummer" placeholder="Personnummer (SE/DK)" onChange={handleChange} required />

            <input name="address" placeholder="Adress" onChange={handleChange} required />
            <input name="postcity" placeholder="Postort" onChange={handleChange} required />
            <input name="postnum" placeholder="Postnummer" onChange={handleChange} required />

            <textarea name="message" placeholder="Meddelande (valfritt)" onChange={handleChange} />

            <label className="checkbox-row">
                <input type="checkbox" name="acceptPrivacy" checked={formData.acceptPrivacy} onChange={handleChange} required />
                Jag godkänner <a href="/integritetspolicy" target="_blank">integritetspolicyn</a>
            </label>

            <label className="checkbox-row">
                <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} required />
                Jag godkänner <a href="/villkor" target="_blank">villkoren</a>
            </label>

            <p><strong>Totalt:</strong> {total} kr</p>
            <button type="submit">Gå till betalning</button>
        </form>
    );
}
