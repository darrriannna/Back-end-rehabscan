import React from "react";
import { services } from "../data/servicesData";
import "../styles/home.css";

const StartMR = ({ onSelectGroup }) => {

    const groups = [
        "alla",
        ...Array.from(new Set(services.map(s => s.group)))
    ];

    const handleClick = (group) => {
        onSelectGroup(group);

        const element = document.getElementById("services");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="home">

            {/* TOP CONTAINERS */}
            <div className="hero-section">

                {/* FILTER CARD ONLY */}
                <div className="mr-hero-card filter-card">
                    <h1>MR-undersökningar</h1>

                    <div className="filter-container">
                        {groups.map(group => (
                            <button
                                key={group}
                                className="filter-btn"
                                onClick={() => handleClick(group)}
                            >
                                {group === "alla"
                                    ? "Alla"
                                    : group.charAt(0).toUpperCase() + group.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* MAP CARD */}
                <div className="mr-hero-card mr-map-card">
                    <h3 className="map-title">Vi finns över hela Sverige</h3>
                    <p className="map-text">
                        Rehabscan är en digital klinik, så vi kan ordna din MR-skanning närmast ditt hem.
                    </p>
                    <a className="map-link" href="./mottagningar">
                        Hitta klinik
                    </a>
                </div>

            </div>

            {/* TITLE + INTRO BELOW BOTH CONTAINERS */}
            <div className="mr-intro-section">
                <h2 className="title-hero">Magnetresonanstomografi</h2>

                <p className="mr-short-text">
                    Vi skickar din remiss, därefter får du kallelse till undersökning.
                    Dina röntgenbilder kontrolleras av röntgenspecialister.
                </p>

                <p>
                    Magnetresonans (MR) är en avancerad och strålningsfri
                    bilddiagnostisk metod som används för att undersöka
                    kroppens organ och mjukdelar med hög precision.
                </p>
            </div>

        </div>
    );
};

export default StartMR;