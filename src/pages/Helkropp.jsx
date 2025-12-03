import React, { useState } from "react";
import "../styles/helkropp.css";
import "../styles/service-product.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import StartHelkropp from "../components/TopHelkropp";

export default function Helkropp() {

    const [openSections, setOpenSections] = useState({
        before: false,
        after: false,
        location: false,
    });

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };
    const scanData = [
        {
            title: "MR Hjärna, ögonhålor, bihålor",
            items: [
                "Infarkt eller blödning i hjärnan (stroke)",
                "Tumör",
                "Multipel skleros (MS)",
                "Tecken på atrofi-demenssjukdom",
                "MR Angiografi (kärl i hjärnan)",
                "Aneurysm (utbuktning) eller missbildning i hjärnans kärl",
                "Förändringar i ögonhålor och bihålor",
            ],
        },
        {
            title: "MR Hals",
            items: [
                "Tumör",
                "Förstorade lymfkörtlar",
                "Sköldkörteln",
                "Spottkörtlar",
                "Larynx-strupen",
                "Vid tydliga symtom rekommenderas MR-Hals",
            ],
        },
        {
            title: "MR Lungor",
            items: [
                "Översikt av lungor, lungsäck",
                "Förstorade lymfkörtlar",
                "Inflammation, tumör, förändringar",
                "Aortaneurysm – Aderbråck",
                "Om du haft stroke, cancer eller lungproblem rekommenderas datortomografi",
            ],
        },
        {
            title: "MR-Buk - lever, gallblåsa, njurar, lymfkörtlar",
            items: [
                "Tumör i bukens organ",
                "Inflammation i bukens organ (t.ex. hepatit, pankreatit)",
                "Leverförfettning och andra leverförändringar",
                "Hinder i gallgångar och njurar",
                "Aortaneurysm – Aderbråck",
                "Förstorade lymfkörtlar (inflammation, infektion, tumör)",
            ],
        },
        {
            title: "MR Lilla bäcken - prostata, äggstockar",
            items: [
                "Urinblåsa",
                "Prostata – förstoring, inflammation och tumör",
                "PSA-prov (enligt Socialstyrelsens riktlinjer)",
                "Livmoder och äggstockar",
                "Muskelknutor (myom), tumör, endometrios, cystor",
                "Lymfkörtlar",
                "Skelett – bäcken, höftleder, muskelfästen",
                "Tarmfickor i tjocktarmen (divertiklar)",
            ],
        },
        {
            title: "MR Skelett – hals, bröst- och ländrygg, höfter",
            items: [
                "Tumör",
                "Metastas",
                "Diskbråck",
                "Spinal stenos",
                "Inflammation",
                "Artros",
                "Kotkompression",
            ],
        },
    ];
    return (
        <div>
            <TopStrip />
            <Navbar />
            <StartHelkropp />
            <div className="layout-container">
                <div className="content-wrapper">
                    <div className="left-image">
                        <img
                            src="/assets/helkropp.png"
                            alt="Body scan"
                            className="body-image"
                        />
                    </div>

                    <div className="right-text">
                        <h1 className="title">MR Helkropp</h1>
                        <p className="subtitle">
                            Välj MR Helkropp för en heltäckande hälsokontroll.
                        </p>

                        <ul className="benefits-list">
                            <li>Fullständig hälsorapport</li>
                            <li>Radiologens analys</li>
                            <li>Specialistbedömning</li>
                            <li>Genomgång av alla organområden</li>
                        </ul>

                        <button className="add-to-cart-btn">Lägg i kundvagn</button>
                    </div>
                </div>
                <button
                    className={`acc-toggle ${openSections.before ? "open" : ""}`}
                    onClick={() => toggleSection("before")}
                >
                    <h3>Inför undersökningen</h3>
                    <span className="acc-icon">{openSections.before ? "▴" : "▾"}</span>
                </button>

                {openSections.before && (
                    <div className="acc-body">
                        <p>
                            Efter din beställning kommer vi skicka en remiss för din MR-undersökning.
                            Innan dess får du ett kortare samtal med en remitterande läkare som går
                            igenom din sjukdomshistoria och dina besvär. Därefter skickas remissen vidare
                            till röntgenkliniken.
                        </p>
                        <p>
                            MR är en säker metod som använder magnetfält och radiovågor — helt utan strålning.
                        </p>
                        <ul>
                            <li>Kläder och föremål med metall tas av före undersökningen.</li>
                            <li>Informera om pacemaker, implantat eller metall i kroppen.</li>
                            <li>Meddela om du är gravid eller misstänker graviditet.</li>
                            <li>Kontrastmedel kan förekomma — du får information i förväg.</li>
                        </ul>
                    </div>
                )}

                {/* AFTER EXAM (GLOBAL TEXT) */}
                <button
                    className={`acc-toggle ${openSections.after ? "open" : ""}`}
                    onClick={() => toggleSection("after")}
                >
                    <h3>Uppföljning efter undersökningen</h3>
                    <span className="acc-icon">{openSections.after ? "▴" : "▾"}</span>
                </button>

                {openSections.after && (
                    <div className="acc-body">
                        <p>
                            Efter undersökningen granskas bilderna av en specialistläkare i radiologi,
                            som sammanställer ett detaljerat utlåtande till den remitterande läkaren.
                        </p>
                        <p>
                            Läkaren återkopplar till dig med resultat, förklaring av fynd och rekommenderad
                            uppföljning. Om något kräver vidare vård hjälper vi dig vidare.
                        </p>
                    </div>
                )}

                {/* LOCATION */}
                <button
                    className={`acc-toggle ${openSections.location ? "open" : ""}`}
                    onClick={() => toggleSection("location")}
                >
                    <h3>Var kan jag testa mig?</h3>
                    <span className="acc-icon">{openSections.location ? "▴" : "▾"}</span>
                </button>

                {openSections.location && (
                    <div className="acc-body">
                        <p>MR-undersökningar utförs på våra anslutna röntgenkliniker.</p>
                    </div>
                )}

                <div className="mr-scan-container">
                    <h2 className="mr-scan-title">Vad ingår i MR-Helkropp?</h2>

                    <div className="grid-deceases">
                        <div className="containers-deceases-info">
                            <p>
                                MR helkropp är en översiktsundersökning, för att hinna avbilda de
                                viktigaste delarna på ca 60 minuter måste vi dra ner på antalet
                                MR-serier/kroppsdel och bildupplösningen.
                            </p>
                            <p>Kontakta oss för mer info – info@rehabscan.se</p>
                        </div>
                    </div>

                    <div className="mr-scan-grid">
                        {scanData.map((section, index) => (
                            <div key={index} className="mr-scan-category">
                                <h3 className="mr-scan-category-title">{section.title}</h3>
                                <ul className="mr-scan-list">
                                    {section.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}
