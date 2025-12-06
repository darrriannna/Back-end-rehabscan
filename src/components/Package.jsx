import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/package.css";
const HelkroppPackages = ({ services, addToCart }) => {
    const navigate = useNavigate();

    // Pull all 3 cards (baseline + packages)
    const baseline = services.find(s => s.id === 6);
    const plus = services.find(s => s.id === 401);
    const pro = services.find(s => s.id === 402);

    const cards = [
        { data: baseline, highlight: false },
        { data: plus, highlight: true },   // MOST VALUE
        { data: pro, highlight: false }
    ];

    return (
        <div className="packages-wrapper">

            <h2 className="packages-title">MR Helkropp – Alternativ & Paket</h2>

            <div className="packages-grid">
                {cards.map(({ data, highlight }) => (
                    <div
                        key={data.id}
                        className={`package-card ${highlight ? "highlight" : ""}`}
                    >
                        <h3 className="package-title">{data.title}</h3>
                        <p className="package-subtitle">{data.subtitle}</p>

                        {/* Includes */}
                        <ul className="package-includes">
                            {data.includes.map((item, index) => (
                                <li key={index}>✓ {item}</li>
                            ))}
                        </ul>

                        <p className="package-price">
                            {data.price.toLocaleString("sv-SE")} kr
                        </p>

                        {/* Buttons */}
                        <button
                            className="package-add"
                            onClick={() => addToCart(data)}
                        >
                            + Lägg till
                        </button>

                        <button
                            className="package-more"
                            onClick={() => navigate(`/service/${data.id}`)}
                        >
                            Läs mer
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HelkroppPackages;
