import React from "react";
import "../styles/home.css";

const StartHome = () => {
    return (
        <div className="home">
            {/* Search Field */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Sök blodprover eller MR-undersökningar"
                    className="search-input"
                />
                <button className="search-btn"><img
                    src="/assets/search.svg"
                    alt="Sök"
                    className="cart-icon"
                /></button>
            </div>

            {/* Hero Section */}
            <div className="hero-section">
                {/* Purple video background card */}
                <div className="hero-card purple-card">

                    <div className="hero-content">
                        <h2 className="title-hero">Hälsokontroller för ökad insikt om din hälsa</h2>
                        <p>
                            Beställ något av våra <a href="#">280 tester</a> och lämna ditt
                            blodprov på en av alla <a href="#">192 mottagningar</a>
                        </p>
                    </div>
                </div>

                {/* Black Weeks card */}
                <div className="hero-card black-card">
                    <h3>BLACK WEEKS</h3>
                    <p>Årets bästa deals!</p>
                    <div className="discount-badge">Upp till 50% Rabatt*</div>
                </div>
            </div>

            {/* Trustpilot Section */}
            <div className="trustpilot-section">
                <p>
                    Se våra <strong>8 970 omdömen</strong>
                </p>
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <span className="trustpilot">Trustpilot</span>
            </div>
        </div>
    );
};

export default StartHome;
