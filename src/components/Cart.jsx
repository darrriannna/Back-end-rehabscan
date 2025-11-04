import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

export default function Cart() {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="cart-container">
            <h2>Din varukorg</h2>
            {cart.length === 0 ? (
                <p>Inga undersökningar valda.</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                {item.name} – {item.price} kr
                                <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
                            </li>
                        ))}
                    </ul>
                    <p><strong>Totalt:</strong> {total} kr</p>
                    <button onClick={() => navigate("/booking")}>Fortsätt till bokning</button>
                </>
            )}
        </div>
    );
}
