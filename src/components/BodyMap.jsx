import { useState } from "react";
import body from "/assets/body.svg";
import "../styles/body.css";

const bodyMapData = [
    { key: "hjarna", title: "MR Hjärna", price: 6500, x: 51, y: 10 },
    { key: "hals", title: "MR Hals", price: 6000, x: 51, y: 16 },
    { key: "nacke", title: "MR Nacke/Halsrygg", price: 4100, x: 51, y: 18 },

    { key: "axel_vanster", title: "MR Vänster Axel", price: 4100, x: 30, y: 22 },
    { key: "axel_hoger", title: "MR Höger Axel", price: 4100, x: 70, y: 22 },

    { key: "rygg", title: "MR Bröstrygg", price: 4100, x: 51, y: 28 },
    { key: "buk", title: "MR Buk", price: 7200, x: 51, y: 39 },
    { key: "lank", title: "MR Ländrygg", price: 4200, x: 51, y: 44 },

    { key: "armbage_vanster", title: "MR Vänster Armbåge", price: 3900, x: 18, y: 38 },
    { key: "armbage_hoger", title: "MR Höger Armbåge", price: 3900, x: 83, y: 38 },
    { key: "prostata", title: "MR Prostata", price: 7400, x: 51, y: 52 },

    { key: "hand_vanster", title: "MR Vänster Hand", price: 3900, x: 9, y: 50 },
    { key: "hand_hoger", title: "MR Höger Hand", price: 3900, x: 93, y: 50 },

    { key: "handled_vanster", title: "MR Vänster Handled", price: 3900, x: 7, y: 53 },
    { key: "handled_hoger", title: "MR Höger Handled", price: 3900, x: 95, y: 53 },

    { key: "hoft_vanster", title: "MR Vänster Höft", price: 4200, x: 41, y: 50 },
    { key: "hoft_hoger", title: "MR Höger Höft", price: 4200, x: 61, y: 50 },

    { key: "kna_vanster", title: "MR Vänster Knä", price: 4100, x: 44, y: 69 },
    { key: "kna_hoger", title: "MR Höger Knä", price: 4100, x: 57, y: 69 },

    { key: "fot_vanster", title: "MR Vänster Fot", price: 3900, x: 46, y: 90 },
    { key: "fot_hoger", title: "MR Höger Fot", price: 3900, x: 55, y: 90 },
    { key: "fotled_vanster", title: "MR Vänster Fotled", price: 3900, x: 44, y: 94 },
    { key: "fotled_hoger", title: "MR Höger Fotled", price: 3900, x: 57, y: 94 }

];

const BodyMap = () => {
    const [active, setActive] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = (e) => {
        if (e.target.scrollTop > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    return (
        <div className="body-map-wrapper">

            <div className="body-scroll" onScroll={handleScroll}>

                <div className="body-stage">

                    {/* ENERGY BACKGROUND */}
                    <div className="energy-bg" />

                    {/* OVAL WAVES */}
                    <div className="wave-oval">
                        <span />
                        <span />
                    </div>

                    {/* BODY */}
                    <img src={body} className="body-svg" alt="body" />

                    {/* DOTS */}
                    <div className="dot-layer">
                        {bodyMapData.map((d) => (
                            <div
                                key={d.key}
                                className={`dot-wrap ${d.x < 20 ? "edge-left" :
                                    d.x > 80 ? "edge-right" : ""
                                    }`}
                                style={{
                                    left: `${d.x}%`,
                                    top: `${d.y}%`
                                }}
                                onClick={() =>
                                    setActive(active === d.key ? null : d.key)
                                }
                            >
                                <div className="dot" />
                                <div className="tooltip">
                                    <div className="title-body">{d.title}</div>
                                    <div className="price-body">{d.price} kr</div>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* ⬇️ OVERLAY ARROW (NOW CORRECTLY POSITIONED) */}
                    <div className={`scroll-indicator ${scrolled ? "hide" : ""}`}>
                        <div className="arrow" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BodyMap;