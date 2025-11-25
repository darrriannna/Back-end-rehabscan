import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { services } from "../data/servicesData"; // <-- USE THE REAL DATA
import "../styles/services.css";

const ServiceSelector = () => {
    const { cart, addToCart, removeFromCart } = useCart();

    const isInCart = (id) => cart.some((item) => item.id === id);

    return (
        <div className="service-selector">
            <h2 className="service-title">Välj undersökning</h2>

            <div className="service-grid">
                {services.map((service) => (
                    <div key={service.id} className="service-card">

                        <div className="service-info">
                            <h3>{service.title}</h3>
                            <p className="price">
                                {service.price.toLocaleString("sv-SE")} kr
                            </p>
                        </div>

                        <div className="card-buttons">
                            {/* Läs mer – goes to product page */}
                            <Link
                                to={`/magnetrontgen/${service.id}`}
                                className="readmore-btn"
                            >
                                Läs mer →
                            </Link>

                            {/* Add/remove cart */}
                            {isInCart(service.id) ? (
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(service.id)}
                                >
                                    Ta bort
                                </button>
                            ) : (
                                <button
                                    className="add-btn"
                                    onClick={() =>
                                        addToCart({
                                            id: service.id,
                                            name: service.title,
                                            price: service.price,
                                            image: service.image,
                                        })
                                    }
                                >
                                    Lägg till i varukorg
                                </button>
                            )}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceSelector;
