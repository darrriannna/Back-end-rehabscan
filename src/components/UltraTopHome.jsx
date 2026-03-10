import React from "react";
import { ultrasoundServices } from "../data/ultraljudData";
import "../styles/home.css";

const StartUltraljud = ({ onSelectGroup }) => {

    const groups = [
        "alla",
        ...Array.from(new Set(ultrasoundServices.map(s => s.group)))
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

            <div className="hero-section">

                {/* FILTER CARD */}
                <div className="mr-hero-card filter-card">
                    <h1>Ultraljud</h1>
                    <a className="map-link" href="./mottagningar">

                    </a>
                    <div className="filter-container">
                        {groups.map(group => (
                            <button
                                key={group}
                                className="filter-btn"
                                onClick={() => handleClick(group)}
                            >
                                {group === "alla"
                                    ? "Alla"
                                    : group}
                            </button>
                        ))}
                    </div>

                </div>

                {/* MAP CARD */}
                <div className="ultraljud-hero-card ultraljud-map-card">
                    <h3 className="map-title-ultra">CT/DT</h3>
                    <p className="map-text-ultra">
                        Innan du bokar en CT/DT-undersökning behöver du kontakta oss för en kort bedömning av dina symtom. CT/DT använder röntgenstrålning och görs därför endast när det finns tydliga medicinska skäl.
                        <br />
                        Vänligen kontakta oss innan bokning så hjälper vi dig vidare: info@rehabscan.se eller 010 210 22 31
                    </p>
                    <a className="map-link" href="./mottagningar">

                    </a>
                </div>

            </div>
            <div className="mr-intro-section">
                <h2 className="title-hero">Ultraljud</h2>

                <p className="mr-short-text">
                    Vi skickar din remiss, därefter får du kallelse till undersökning.
                    Dina röntgenbilder kontrolleras av röntgenspecialister.
                </p>

                <p>
                    Ultraljud är en bilddiagnostisk undersökning där man använder ljudvågor för att skapa bilder av kroppens organ och vävnader. Metoden används ofta för att undersöka till exempel mage, mjukdelar, blodkärl och muskler.

                    Undersökningen är smärtfri, skonsam och använder ingen röntgenstrålning. Under undersökningen förs en liten prob över huden, och bilderna visas direkt på en skärm.
                </p>
            </div>


        </div>
    );
};

export default StartUltraljud;