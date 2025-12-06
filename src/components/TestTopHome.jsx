import React from "react";
import "../styles/home.css";

const StartTest = () => {
    return (
        <div className="home">

            <div className="hero-section">
                <div className="test-hero-card test-banner-card">

                    <div className="hero-content">
                        <h2 className="title-hero">Hälsotester</h2>
                        <p className="mr-text">
                            Ta kontroll över din hälsa utan långa väntetider.<br /> Få ett komplett hälsosvar inom 2 dagar – snabbt, tryggt och professionellt.
                        </p>
                    </div>
                </div>

                {/* Black Weeks card */}
                <div className="test-hero-card test-map-card">
                    <h3 className="map-title">Vi finns över hela Sverige</h3>
                    <p className="map-text">Rehabscan är en digital klinik, så vi kan ordna din MR-skanning eller blodbrov närmast ditt hem.</p>
                    <a className="map-link" href="./Mottagningar">Hitta kliniken</a>

                </div>
            </div>
        </div>
    );
};

export default StartTest;
