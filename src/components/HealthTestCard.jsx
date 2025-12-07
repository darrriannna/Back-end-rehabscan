import React from "react";
import { FiShoppingCart, FiX } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function HealthTestCard({ test }) {

    const { addToCart, removeFromCart, cart } = useCart();
    const navigate = useNavigate();

    const isInCart = (id) => cart.some(item => item.id === id);


    return (
        <div className="health-card">



            {/* Image section */}
            <div
                className="image-box"
                style={{ backgroundColor: test.bg }}
            >
                <img src={test.image} alt={test.title} className="test-image" />

                {/* floating icon */}
                <div className="floating-icon">{test.icon}</div>

            </div>

            {/* Text section */}
            <div className="text-box">
                <div className="title-row">
                    <h3>{test.title}</h3>

                    {test.discount && (
                        <span className="title-badge">-{test.discount}%</span>
                    )}
                </div>
                <p className="subtitle">{test.subtitle}</p>

                <p className="markers">
                    ⚙ {test.markers} markörer
                </p>

                <ul className="bullet-list">
                    {test.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                    ))}
                </ul>

                <div className="price-box">
                    <span className="old">{test.oldPrice} kr</span>
                    <span className="new">{test.newPrice} kr</span>
                </div>

                {/* Buttons */}
                <div className="button-row">
                    <button
                        className="cart-btn"
                        onClick={() =>
                            isInCart(test.id)
                                ? removeFromCart(test.id)
                                : addToCart({
                                    id: test.id,
                                    name: test.title,
                                    image: test.image,
                                    price: Number(test.newPrice.replace(/\s+/g, "")),
                                })
                        }
                    >
                        {isInCart(test.id) ? (
                            <FiX size={20} color="#fff" />
                        ) : (
                            <FiShoppingCart size={20} color="#fff" />
                        )}
                    </button>

                    <button className="arrow-btn" onClick={() => navigate(`/halsokontroll/${test.id}`)}>
                        <FaArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
