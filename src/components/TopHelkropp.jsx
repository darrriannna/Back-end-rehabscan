import React from "react";
import "../styles/home.css";

const StartHelkropp = () => {
    return (
        <div className="home">

            <div className="hero-section">
                <div className="helkropp-hero-card helkropp-banner-card">

                    <div className="hero-content">
                        <h2 className="title-hero">Helkropp</h2>
                        <p className="mr-text">
                            Ta kontroll över din hälsa utan långa väntetider.<br /> Få ett komplett hälsosvar inom 2 dagar – snabbt, tryggt och professionellt.
                        </p>
                    </div>
                </div>
                <div className="ultraljud-hero-card ultraljud-map-card">
                    <h3 className="map-title">Vi finns över hela Sverige</h3>
                    <p className="map-text">Rehabscan är en digital klinik, så vi kan ordna din ultraljud närmast ditt hem.</p>
                    <a className="map-link" href="./Mottagningar">Hitta klinik</a>

                </div>

            </div>
        </div>
    );
};

export default StartHelkropp;