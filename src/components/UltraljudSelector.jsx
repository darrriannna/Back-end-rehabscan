import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { FiShoppingCart, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

import { ultrasoundServices } from "../data/ultraljudData";
import "../styles/ultraljud.css";

const UltraljudCards = () => {


    const { cart, addToCart, removeFromCart } = useCart();

    const [openId, setOpenId] = useState(null);



    const isInCart = (id) => cart.some(item => item.id === id);

    // Convert data to card format
    const services = ultrasoundServices.map((service) => {
        const code = service.title
            .replace("Ultraljud ", "")
            .slice(0, 3)
            .toUpperCase();

        return {
            ...service,
            code,
            newPrice: `${service.price} kr`,
        };
    });

    const toggleDropdown = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="ultr-container">

            <div className="ultr-header">Ultraljud</div>

            <div className="ultr-grid">
                {services.map(service => {
                    const price = Number(service.newPrice.replace(/\D/g, ""));

                    return (
                        <div key={service.id} className="ultr-card">

                            {/* Pastel header */}
                            <div className="ultr-top">
                                <div className="ultr-code">{service.code}</div>
                            </div>

                            <div className="ultr-content">
                                <h3>{service.title}</h3>
                                <p className="ultr-desc">{service.description}</p>

                                <div className="ultr-prices">
                                    <span className="ultr-new">{service.newPrice}</span>
                                </div>

                                <div className="ultr-actions">

                                    {/* Cart */}
                                    <button
                                        className="ultr-cart-btn"
                                        onClick={() =>
                                            isInCart(service.id)
                                                ? removeFromCart(service.id)
                                                : addToCart({
                                                    id: service.id,
                                                    name: service.title,
                                                    type: service.type,
                                                    price,
                                                    image: null,
                                                })
                                        }
                                    >
                                        {isInCart(service.id)
                                            ? <FiX size={20} color="#333" />
                                            : <FiShoppingCart size={20} color="#333" />}
                                    </button>

                                    {/* Dropdown toggle */}
                                    <button
                                        className="ultr-more-btn"
                                        onClick={() => toggleDropdown(service.id)}
                                    >
                                        {openId === service.id ? (
                                            <>
                                                <FiChevronUp size={16} style={{ marginRight: 6 }} />
                                                Dölj info
                                            </>
                                        ) : (
                                            <>
                                                <FiChevronDown size={16} style={{ marginRight: 6 }} />
                                                Visa info
                                            </>
                                        )}
                                    </button>

                                </div>

                                {/* DROPDOWN DETAILS */}
                                <div className={`ultr-dropdown ${openId === service.id ? "open" : ""}`}>


                                    <div className="ultr-drop-section">
                                        <h4>När rekommenderas?</h4>
                                        <p>{service.whenRecommended}</p>
                                    </div>

                                    <div className="ultr-drop-section">
                                        <h4>Vad kan upptäckas?</h4>
                                        <p>{service.detectable}</p>
                                    </div>

                                    <div className="ultr-drop-section">
                                        <h4>Detta ingår</h4>
                                        <ul>
                                            {service.includes.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>


                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default UltraljudCards;
