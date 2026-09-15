import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/servicesData";
import "../styles/home.css";

const StartMR = ({ onSelectGroup }) => {

    /* Only MR belongs on this page */
    const mrServices = services.filter(
        (service) => service.type === "mr"
    );

    /* Build filters only from MR services */
    const groups = [
        "alla",
        ...Array.from(
            new Set(
                mrServices.map(
                    (service) => service.group
                )
            )
        ),
    ];

    const handleClick = (group) => {
        onSelectGroup(group);

        const element =
            document.getElementById("services");

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="home">

            {/* ========================================
                TOP CONTAINERS
            ======================================== */}

            <div className="hero-section">

                {/* ========================================
                    MR FILTER CARD
                ======================================== */}

                <div className="mr-hero-card filter-card">

                    <h1>MR-undersökningar</h1>

                    <div className="filter-container">

                        {groups.map((group) => (
                            <button
                                key={group}
                                type="button"
                                className="filter-btn"
                                onClick={() =>
                                    handleClick(group)
                                }
                            >
                                {group === "alla"
                                    ? "Alla"
                                    : group
                                        .charAt(0)
                                        .toUpperCase() +
                                    group.slice(1)}
                            </button>
                        ))}

                    </div>

                </div>


                {/* ========================================
                    MAP CARD
                ======================================== */}

                <div className="mr-hero-card mr-map-card">

                    <h3 className="map-title">
                        Vi finns över hela Sverige
                    </h3>

                    <p className="map-text">
                        RehabScan är en digital klinik,
                        så vi kan ordna din MR-skanning
                        närmast ditt hem.
                    </p>

                    <Link
                        className="map-link"
                        to="/mottagningar"
                    >
                        Hitta klinik
                    </Link>

                </div>

            </div>


            {/* ========================================
                MR INTRODUCTION
            ======================================== */}

            <div className="mr-intro-section">

                <h2 className="title-hero">
                    Magnetresonanstomografi
                </h2>

                <p className="mr-short-text">
                    Vi skickar din remiss, därefter får
                    du kallelse till undersökning. Dina
                    röntgenbilder kontrolleras av
                    röntgenspecialister.
                </p>

                <p>
                    Magnetresonans (MR) är en avancerad
                    och strålningsfri bilddiagnostisk
                    metod som används för att undersöka
                    kroppens organ och mjukdelar med hög
                    precision.
                </p>

            </div>

        </div>
    );
};

export default StartMR;