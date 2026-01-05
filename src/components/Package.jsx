import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/package.css";

const HelkroppPackages = ({ services }) => {
    const navigate = useNavigate();
    const { addToCart, removeFromCart, cart } = useCart();

    if (!services || services.length === 0) return null; // Avoid errors if services not loaded

    // Pull all 3 package cards
    const baseline = services.find((s) => s.id === 6);
    const plus = services.find((s) => s.id === 401);
    const pro = services.find((s) => s.id === 402);

    const cards = [
        { data: baseline, highlight: false },
        { data: plus, highlight: true }, // Most Value
        { data: pro, highlight: false }
    ].filter(card => card.data);

    // Original prices for calculating savings
    const originalPrices = {
        mrHelkropp: 21995,
        halsokontrollStor: 2065,
        halsokontrollPlus: 3500
    };

    // Extra Läs mer info links (link to hälsotester product pages)
    const extraInfoLinks = {
        401: {
            text: "Mer om Hälsokontroll Stor",
            link: "/halsokontroll/201"
        },
        402: {
            text: "Mer om Hälsokontroll Man Plus",
            link: "/halsokontroll/204"
        }
    };

    // Check if item is in cart
    const isInCart = (id) => cart.some((item) => item.id === id);

    return (
        <div className="packages-wrapper">
            <h2 className="packages-title">MR Helkropp Paket</h2>

            <div className="packages-grid">
                {cards.map(({ data, highlight }) => {
                    // Calculate original price
                    let originalPrice = 0;
                    if (data.id === 6) originalPrice = originalPrices.mrHelkropp;
                    else if (data.id === 401)
                        originalPrice = originalPrices.mrHelkropp + originalPrices.halsokontrollStor;
                    else if (data.id === 402)
                        originalPrice = originalPrices.mrHelkropp + originalPrices.halsokontrollPlus;

                    const savings = originalPrice - data.price;

                    return (
                        <div key={data.id} className={`package-card ${highlight ? "highlight" : ""}`}>
                            <h3 className="package-title">{data.title}</h3>
                            <p className="package-subtitle">{data.subtitle}</p>

                            {/* Includes */}
                            <ul className="package-includes">
                                {data.includes.map((item, index) => (
                                    <li key={index}>✓ {item}</li>
                                ))}
                            </ul>

                            {/* Pricing */}
                            <p className="package-original-price">
                                Original: {originalPrice.toLocaleString("sv-SE")} kr
                            </p>
                            <p className="package-price">{data.price.toLocaleString("sv-SE")} kr</p>
                            {savings > 0 && (
                                <p className="package-savings">Du sparar: {savings.toLocaleString("sv-SE")} kr</p>
                            )}

                            {/* Läs mer extra info */}
                            {extraInfoLinks[data.id] && (
                                <p className="package-extra-info">
                                    <a href={extraInfoLinks[data.id].link}>{extraInfoLinks[data.id].text}</a>
                                </p>
                            )}

                            {/* Buttons */}
                            <button
                                className={`package-add ${isInCart(data.id) ? "in-cart" : ""}`}
                                onClick={() =>
                                    isInCart(data.id)
                                        ? removeFromCart(data.id)
                                        : addToCart({
                                            id: data.id,
                                            name: data.title,
                                            image: data.image || "/assets/placeholder.png",
                                            type: service.type,
                                            price: data.price
                                        })
                                }
                            >
                                {isInCart(data.id) ? "I varukorg" : "+ Lägg till"}
                            </button>

                            <p
                                className="scroll-link"
                                style={{
                                    cursor: "pointer",
                                    color: "black",
                                    textDecoration: "underline",
                                    textAlign: "center",
                                    marginTop: "20px"
                                }}
                                onClick={() => {
                                    const section = document.getElementById("helkropp-product");
                                    if (section) section.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Se detaljerad MR Helkropp
                            </p>
                        </div>
                    );
                })}
            </div>


        </div>
    );
};

export default HelkroppPackages;
