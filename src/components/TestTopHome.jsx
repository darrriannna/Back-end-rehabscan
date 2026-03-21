import React from "react";
import { healthTests } from "../data/healthTestsData";
import "../styles/home.css";

const StartTest = ({ onSelectGroup }) => {

    const testGroups = [
        ...Array.from(
            new Set(
                healthTests
                    .filter(t => t.category === "Hälsotester")
                    .map(t => t.group)
            )
        )
    ];

    const intygGroups = [
        ...Array.from(
            new Set(
                healthTests
                    .filter(t => t.category === "Intyg")
                    .map(t => t.group)
            )
        )
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

                <div className="test-hero-card test-filter-card">
                    <h1 className="test-title-filter">Hälsotester</h1>
                    <div className="test-filter-container">
                        <button className="filter-btn" onClick={() => handleClick("alla")}>
                            Alla
                        </button>

                        {testGroups.map(group => (
                            <button
                                key={group}
                                className="filter-btn"
                                onClick={() => handleClick(group)}
                            >
                                {group}
                            </button>
                        ))}
                    </div>

                    {/* INTYG */}
                    <h1 className="test-title-filter">Intyg</h1>
                    <div className="filter-container">
                        {intygGroups.map(group => (
                            <button
                                key={group}
                                className="filter-btn"
                                onClick={() => handleClick(group)}
                            >
                                {group}
                            </button>
                        ))}
                    </div>

                </div>

                <div className="mr-hero-card mr-map-card">
                    <h3 className="map-title">Vi finns över hela Sverige</h3>
                    <p className="map-text">
                        Rehabscan är en digital klinik, vi ordnar både tester och intyg nära dig.
                    </p>
                    <a className="map-link" href="./mottagningar">
                        Hitta klinik
                    </a>
                </div>

            </div>

        </div>
    );
};

export default StartTest;