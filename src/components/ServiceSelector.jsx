import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/services.css";

const services = [
    { id: 1, name: "MR Ländrygg", price: "4 200kr" },
    { id: 2, name: "MR Höger Axel", price: "4 100kr" },
    { id: 3, name: "MR Vänster Axel", price: "4 100kr" },
    { id: 4, name: "MR Bäcken/höftleder", price: "4 100kr" },
    { id: 5, name: "MR Vänster Knä", price: "4 100kr" },
    { id: 7, name: "MR Bröstrygg", price: "4 100kr" },
    { id: 8, name: "MR Höger Fot", price: "3 900kr" },
    { id: 9, name: "MR Vänster Fot", price: "3 900kr" },
    { id: 10, name: "MR Höger Fotled", price: "3 900kr" },
    { id: 11, name: "MR Vänster Fotled", price: "3 900kr" },
    { id: 12, name: "MR Höger Hand", price: "3 900kr" },
    { id: 13, name: "MR Vänster Hand", price: "3 900kr" },
    { id: 14, name: "MR Hälsena", price: "4 100kr" },
    { id: 15, name: "MR Höger Armbåge", price: "3 900kr" },
    { id: 16, name: "MR Vänster Armbåge", price: "3 900kr" },
    { id: 17, name: "MR Höger Underben", price: "3 900kr" },
    { id: 18, name: "MR Vänster Underben", price: "3 900kr" },
    { id: 19, name: "MR Sacrum/Sacroliacaleder", price: "4 100kr" },
    { id: 22, name: "MR Nacke/Halsrygg", price: "4 100kr" },
    { id: 23, name: "MR Helrygg", price: "11 500kr" },
    { id: 26, name: "MR Höger Knä", price: "4 100kr" },
    { id: 29, name: "MR Höger Överarm", price: "3 900kr" },
    { id: 30, name: "MR Vänster Överarm", price: "3 900kr" },
    { id: 31, name: "MR Höger Underarm", price: "3 900kr" },
    { id: 32, name: "MR Vänster Underarm", price: "3 900kr" },
    { id: 33, name: "MR Höger Handled", price: "3 900kr" },
    { id: 34, name: "MR Vänster Handled", price: "3 900kr" },
];

const ServiceSelector = () => {
    const { addToCart } = useCart();

    return (
        <div className="service-selector">
            <h2 className="service-title">Välj undersökning</h2>
            <div className="service-grid">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <h3>{service.name}</h3>
                        <p className="price">{service.price}</p>
                        <button onClick={() => addToCart(service)}>Lägg till i varukorg</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceSelector;
