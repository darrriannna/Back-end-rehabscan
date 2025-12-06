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
                            Med MR Helkropp får du en komplett genomlysning av kroppens viktigaste organ och strukturer. Undersökningen kan avslöja tidiga tecken på sjukdom och ger dig tydliga svar inom kort tid. En trygg investering i din framtida hälsa.
                        </p>
                    </div>
                </div>
                <div className="ultraljud-hero-card ultraljud-map-card">
                    <h3 className="map-title">Vi finns över hela Sverige</h3>
                    <p className="map-text">Rehabscan är en digital klinik, så vi kan ordna din MR Helkropp närmast ditt hem.</p>
                    <a
                        href="#hitta-kliniken"
                        className="map-link"
                        onClick={(e) => {
                            e.preventDefault();
                            const section = document.getElementById("hitta-kliniken");
                            if (section) section.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Hitta kliniken
                    </a>

                </div>

            </div>
        </div>
    );
};

export default StartHelkropp;