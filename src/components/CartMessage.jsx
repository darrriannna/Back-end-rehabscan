// src/components/CartMessage.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/cart.css";

const CartMessage = () => {
    const { message } = useCart();

    if (!message) return null;

    return (
        <div className="cart-toast">
            <p>{message}</p>
        </div>
    );
};

export default CartMessage;
