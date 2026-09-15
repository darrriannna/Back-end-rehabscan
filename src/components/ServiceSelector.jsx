import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { services } from "../data/servicesData";
import "../styles/services.css";

const ServiceSelector = ({ selectedGroup }) => {
    const { cart, addToCart, removeFromCart } = useCart();

    /* Only MR services belong on the MR page */
    const mrServices = services.filter(
        (service) => service.type === "mr"
    );

    const filteredServices =
        selectedGroup === "alla"
            ? mrServices
            : mrServices.filter(
                (service) => service.group === selectedGroup
            );

    const isInCart = (id) =>
        cart.some((item) => item.id === id);

    return (
        <div
            className="service-selector"
            id="services"
        >
            <h2 className="service-title">
                Välj MR-undersökning
            </h2>

            <div className="service-grid">
                {filteredServices.map((service) => (
                    <div
                        key={service.id}
                        className="service-card"
                    >
                        <div className="service-info">
                            <h3>{service.title}</h3>

                            <p className="price">
                                {service.price.toLocaleString(
                                    "sv-SE"
                                )}{" "}
                                kr
                            </p>
                        </div>

                        <div className="card-buttons">

                            {/* PRODUCT PAGE */}

                            <Link
                                to={`/magnetrontgen/${service.slug}`}
                                className="readmore-btn"
                            >
                                Läs mer →
                            </Link>


                            {/* CART */}

                            {isInCart(service.id) ? (
                                <button
                                    type="button"
                                    className="remove-btn"
                                    onClick={() =>
                                        removeFromCart(
                                            service.id
                                        )
                                    }
                                >
                                    Ta bort
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="add-btn"
                                    onClick={() =>
                                        addToCart({
                                            id: service.id,
                                            name: service.title,
                                            price: service.price,
                                            type: service.type,
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