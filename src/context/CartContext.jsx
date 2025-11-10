// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState(null);

    const showMessage = (text) => {
        setMessage(text);
        setTimeout(() => setMessage(null), 2500); // auto-hide after 2.5s
    };

    const addToCart = (service) => {
        if (!cart.find((item) => item.id === service.id)) {
            setCart([...cart, service]);
            showMessage(`${service.name} har lagts till i varukorgen.`);
        } else {
            showMessage(`${service.name} finns redan i varukorgen.`);
        }
    };

    const removeFromCart = (id) => {
        const removedItem = cart.find((item) => item.id === id);
        setCart(cart.filter((item) => item.id !== id));
        if (removedItem) showMessage(`${removedItem.name} har tagits bort.`);
    };

    const clearCart = () => {
        setCart([]);
        showMessage("Varukorgen är tömd.");
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart, message }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
