import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart, FiX } from "react-icons/fi";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { healthTests } from "../data/healthTestsData";

import "../styles/test-carousel.css";
import "../styles/tests.css";

const INCLUDED_TEST_IDS = [206, 207, 208, 209];

export default function HormonesCarousel() {
    const navigate = useNavigate();
    const { addToCart, removeFromCart, cart } = useCart();
    const trackRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);

    const filteredTests = healthTests.filter(test =>
        INCLUDED_TEST_IDS.includes(test.id)
    );

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

    const nextSlide = () =>
        setCurrentIndex((prev) =>
            prev + 1 >= filteredTests.length ? 0 : prev + 1
        );

    const prevSlide = () =>
        setCurrentIndex((prev) =>
            prev - 1 < 0 ? filteredTests.length - 1 : prev - 1
        );

    const isInCart = (id) => cart.some((item) => item.id === id);

    return (
        <div className="carousel-container">
            <div className="carousel-header">
                <h2>Hormon, Stress & Energi</h2>
                <button
                    className="svg-btn"
                    onClick={() => navigate("/halsotester")}
                >
                    <FaArrowRight size={30} />
                </button>
            </div>

            <div className="carousel">
                {/* LEFT ARROW */}
                <button className="arrow left" onClick={prevSlide}>
                    <FaChevronLeft size={22} />
                </button>

                <div className="carousel-track-wrapper">
                    <div
                        className="carousel-track"
                        ref={trackRef}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                        }}
                    >
                        {filteredTests.map((test) => (
                            <div
                                className="carousel-card health-card"
                                key={test.id}
                            >
                                {/* IMAGE */}
                                <div
                                    className="image-box"
                                    style={{ backgroundColor: test.bg }}
                                >
                                    <img
                                        src={test.image}
                                        alt={test.title}
                                        className="test-image"
                                    />
                                    <div className="floating-icon">
                                        {test.icon}
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="text-box">
                                    <div className="title-row">
                                        <h3>{test.title}</h3>
                                        {test.discount && (
                                            <span className="title-badge">
                                                -{test.discount}%
                                            </span>
                                        )}
                                    </div>

                                    <p className="subtitle">{test.subtitle}</p>
                                    <p className="markers">
                                        ⚙ {test.markers} markörer
                                    </p>

                                    {/* PRICE */}
                                    <div className="price-box">
                                        <span className="old">
                                            {test.oldPrice} kr
                                        </span>
                                        <span className="new">
                                            {test.newPrice} kr
                                        </span>
                                    </div>

                                    {/* BUTTONS */}
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
                                                        type: test.type || "test",
                                                        price: Number(
                                                            test.newPrice.replace(/\s+/g, "")
                                                        ),
                                                    })
                                            }
                                        >
                                            {isInCart(test.id) ? (
                                                <FiX size={20} color="#fff" />
                                            ) : (
                                                <FiShoppingCart
                                                    size={20}
                                                    color="#fff"
                                                />
                                            )}
                                        </button>

                                        <button
                                            className="arrow-btn"
                                            onClick={() =>
                                                navigate(
                                                    `/halsokontroll/${test.id}`
                                                )
                                            }
                                        >
                                            <FaArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT ARROW */}
                <button className="arrow right" onClick={nextSlide}>
                    <FaChevronRight size={22} />
                </button>
            </div>
        </div>
    );
}
