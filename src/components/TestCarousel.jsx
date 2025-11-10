import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/carousel.css";

const TestCarousel = () => {
    const navigate = useNavigate();
    const { addToCart, removeFromCart, cart } = useCart();
    const trackRef = useRef(null);

    const services = [
        {
            id: 101,
            name: "Hälsotest – 49 markörer",
            description: "Omfattande blodanalys med 49 markörer.",
            oldPrice: "2 195kr",
            newPrice: 1795,
            image: "/assets/halsotest.png",
        },
        {
            id: 102,
            name: "Hälsotest – 35 markörer",
            description: "Basblodtest med 35 viktiga hälsomarkörer.",
            oldPrice: "1 975kr",
            newPrice: 1295,
            image: "/assets/halsotest.png",
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
            <h2 className="carousel-header">Hälsotester</h2>
            <div className="carousel">
                <button className="arrow left" onClick={prevSlide}>
                    &#10094;
                </button>
                <div className="carousel-track-wrapper">
                    <div
                        className="carousel-track"
                        ref={trackRef}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                        }}
                    >
                        {services.map((service, index) => (
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
                                    <span className="new-price">{service.newPrice} kr</span>
                                </p>

                                {/* Buttons */}
                                <div className="button-group">
                                    {!isInCart(service.id) ? (
                                        <img
                                            src="/assets/add.svg"
                                            alt="Add to Cart"
                                            className="custom-icon-btn add"
                                            onClick={() => addToCart({
                                                id: service.id,
                                                name: service.name,
                                                image: service.image,
                                                price: Number(service.newPrice.replace(/\D/g, "")), // extract numeric value
                                            })
                                            }
                                        />
                                    ) : (
                                        <img
                                            src="/assets/remove.svg"
                                            alt="Remove from Cart"
                                            className="custom-icon-btn remove"
                                            onClick={() => removeFromCart(service.id)}
                                        />
                                    )}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <button className="arrow right" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default TestCarousel;
