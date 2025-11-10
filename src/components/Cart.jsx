import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const goToBooking = () => {
        if (cart.length === 0) return alert("Din varukorg är tom!");
        navigate("/booking", { state: { cart } });
    };

    return (
        <div className="cart-container">
            <h2>Din varukorg</h2>
            {cart.length === 0 ? (
                <p>Inga undersökningar valda.</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div>
                                    <strong>{item.name}</strong> —{" "}
                                    {item.price.toLocaleString("sv-SE")} kr
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Ta bort
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="cart-summary">
                        <p>
                            <strong>Totalt:</strong>{" "}
                            {total.toLocaleString("sv-SE")} kr
                        </p>
                        <div className="cart-actions">
                            <button className="clear-btn" onClick={clearCart}>
                                Töm varukorg
                            </button>
                            <button className="checkout-btn" onClick={goToBooking}>
                                Fortsätt till bokning
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
