import React from "react";
import "../styles/home.css";

const StartUltraljud = () => {
    return (
        <div className="home">

            <div className="hero-section">
                <div className="ultraljud-hero-card ultraljud-card">

                    <div className="hero-content">
                        <h2 className="title-hero">Ultraljud</h2>
                        <p className="ultraljud-text">
                            Få tid för ultraljud inom 1-7 arbetsdagar.<br />
                            Vi skickar din remiss, därefter får du kallelse till undersökning.
                            Dina bilder kontrolleras <em> av röntgenspecialister.</em>.
                        </p>
                    </div>
                </div>

                {/* Black Weeks card */}
                <div className="ultraljud-hero-card ultraljud-map-card">
                    <h3 className="map-title">Vi finns över hela Sverige</h3>
                    <p className="map-text">Rehabscan är en digital klinik, så vi kan ordna din ultraljud närmast ditt hem.</p>
                    <a className="map-link" href="./Mottagningar">Hitta kliniken</a>

                </div>
            </div>
        </div>
    );
};

export default StartUltraljud;