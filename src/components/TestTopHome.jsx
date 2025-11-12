import React from "react";
import "../styles/home.css";

const StartTest = () => {
    return (
        <div className="home">

            <div className="hero-section">
                <div className="test-hero-card mr-card">

                    <div className="hero-content">
                        <h2 className="title-hero">Magnetröntgen</h2>
                        <p className="mr-text">
                            Få tid för magnetkameraundersökning inom 1-7 arbetsdagar.<br />
                            Vi skickar din remiss, därefter får du kallelse till undersökning.
                            Dina röntgenbilder kontrolleras <em> av röntgenspecialister.</em>.
                        </p>
                    </div>
                </div>

                {/* Black Weeks card */}
                <div className="test-hero-card test-map-card">
                    <h3 className="map-title">Vi finns över hela Sverige</h3>
                    <p className="map-text">Rehabscan är en digital klinik, så vi kan ordna din MR-skanning närmast ditt hem.</p>
                    <a className="map-link" href="./Map">Hitta klinik</a>

                </div>
            </div>
        </div>
    );
};

export default StartTest;
