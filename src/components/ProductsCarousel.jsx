import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaArrowRight } from "react-icons/fa";

import { FiShoppingCart, FiX, FiArrowRight } from "react-icons/fi";
import "../styles/carousel.css";

const ProductCarousel = () => {
    const navigate = useNavigate();
    const { addToCart, removeFromCart, cart } = useCart();
    const trackRef = useRef(null);

    const services = [
        {
            id: 3,
            name: "MR Vänster Axel",
            description: "Upptäck skador i axelledens muskler och senor.",
            oldPrice: "4 900kr",
            newPrice: "4100 kr",
            image: "/assets/axel.jpg",
        },
        {
            id: 5,
            name: "MR Vänster Knä",
            description: "Upptäck skador på korsband, menisk och ledband.",
            oldPrice: "4 900kr",
            newPrice: "4100 kr",
            image: "/assets/kna-hoger.jpg",
        },
        {
            id: 1,
            name: "MR Ländrygg",
            description: "Identifiera diskbråck eller ryggmärgsproblem.",
            oldPrice: "4 900kr",
            newPrice: "4200 kr",
            image: "/assets/landrygg.jpg",
        },
        {
            id: 22,
            name: "MR Nacke/Halsrygg",
            description: "Upptäck skador, diskbråck eller påverkad nervfunktion.",
            oldPrice: "5 200kr",
            newPrice: "4100 kr",
            image: "/assets/nacke.jpg",
        },
        {
            id: 4,
            name: "MR Bäcken/höftleder",
            description: "Påvisa inflammation eller artros i höftleder.",
            oldPrice: "4 900kr",
            newPrice: "4100 kr",
            image: "/assets/backen.jpg",
        },
        {
            id: 2,
            name: "MR Höger Axel",
            description: "Upptäck inflammation eller artros i axeln.",
            oldPrice: "4 900kr",
            newPrice: "4100 kr",
            image: "/assets/axel.jpg",
        },
        {
            id: 26,
            name: "MR Höger Knä",
            description: "Identifiera vanliga knäskador och inflammationer.",
            oldPrice: "4 900kr",
            newPrice: "4100 kr",
            image: "/assets/kna-vanster.jpg",
        },
        {
            id: 23,
            name: "MR Helrygg",
            description: "Upptäck diskbråck och andra ryggproblem.",
            oldPrice: "12 400kr",
            newPrice: "11500 kr",
            image: "/assets/helrygg.jpg",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 480) setCardsPerView(1);
            else if (window.innerWidth < 768) setCardsPerView(2);
            else setCardsPerView(4);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1 >= services.length ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 < 0 ? services.length - 1 : prev - 1));
    };

    const isInCart = (id) => cart.some((item) => item.id === id);

    return (
        <div className="carousel-container">
            <div className="carousel-header">
                <h2>Magnetröntgen</h2>
                <button className="svg-btn" onClick={() => navigate("/mr-undersokningar")}>
                    <FaArrowRight size={30} />
                </button>
            </div>

            <div className="carousel">
                <button className="arrow left" onClick={prevSlide}>&#10094;</button>

                <div className="carousel-track-wrapper">
                    <div
                        className="carousel-track"
                        ref={trackRef}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
                        }}
                    >
                        {services.map((service, index) => {
                            const price = Number(service.newPrice.replace(/\D/g, ""));

                            return (
                                <div className="carousel-card" key={index}>
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="carousel-image"
                                    />

                                    <h3>{service.name}</h3>
                                    <p className="service-description">{service.description}</p>

                                    <p>
                                        <span className="old-price">{service.oldPrice}</span>{" "}
                                        <span className="new-price">{service.newPrice}</span>
                                    </p>

                                    {/* --- NEW BUTTON GROUP --- */}
                                    <div className="button-row">
                                        <button
                                            className="cart-btn"
                                            onClick={() =>
                                                isInCart(service.id)
                                                    ? removeFromCart(service.id)
                                                    : addToCart({
                                                        id: service.id,
                                                        name: service.name,
                                                        image: service.image,
                                                        type: service.type,
                                                        price,
                                                    })
                                            }
                                        >
                                            {isInCart(service.id) ? (
                                                <FiX size={18} color="#fff" />
                                            ) : (
                                                <FiShoppingCart size={18} color="#fff" />
                                            )}
                                        </button>
                                        {/* Go to product page */}
                                        <button
                                            className="arrow-btn"
                                            onClick={() => navigate(`/magnetrontgen/${service.id}`)}
                                        >
                                            <FiArrowRight size={18} />
                                        </button>

                                        {/* Cart Button */}

                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

                <button className="arrow right" onClick={nextSlide}>&#10095;</button>
            </div>
        </div>
    );
};

export default ProductCarousel;
