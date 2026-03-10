import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { services } from "../data/servicesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopStrip from "../components/TopStrip";
import StartHelkropp from "../components/TopHelkropp";
import "../styles/helkropp.css";
import "../styles/service-product.css";
import HelkroppPackages from "../components/Package";

export default function HelkroppPage() {
    const helkroppService = services.find((s) => s.id === 6); // your Helkropp ID
    const { cart, addToCart, removeFromCart } = useCart();
    const isInCart = cart.some((item) => item.id === helkroppService.id);

    const [openSections, setOpenSections] = useState({
        before: false,
        after: false,
        location: false,
    });

    const toggleSection = (key) =>
        setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

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
            items: ["Tumör", "Förstorade lymfkörtlar", "Sköldkörteln", "Spottkörtlar", "Larynx-strupen", "Vid tydliga symtom rekommenderas MR-Hals"],
        },
        {
            title: "MR Lungor",
            items: ["Översikt av lungor, lungsäck", "Förstorade lymfkörtlar", "Inflammation, tumör, förändringar", "Aortaneurysm – Aderbråck", "Om du haft stroke, cancer eller lungproblem rekommenderas datortomografi"],
        },
        {
            title: "MR-Buk - lever, gallblåsa, njurar, lymfkörtlar",
            items: ["Tumör i bukens organ", "Inflammation i bukens organ (t.ex. hepatit, pankreatit)", "Leverförfettning och andra leverförändringar", "Hinder i gallgångar och njurar", "Aortaneurysm – Aderbråck", "Förstorade lymfkörtlar (inflammation, infektion, tumör)"],
        },
        {
            title: "MR Lilla bäcken - prostata, äggstockar",
            items: ["Urinblåsa", "Prostata – förstoring, inflammation och tumör", "PSA-prov (enligt Socialstyrelsens riktlinjer)", "Livmoder och äggstockar", "Muskelknutor (myom), tumör, endometrios, cystor", "Lymfkörtlar", "Skelett – bäcken, höftleder, muskelfästen", "Tarmfickor i tjocktarmen (divertiklar)"],
        },
        {
            title: "MR Skelett – hals, bröst- och ländrygg, höfter",
            items: ["Tumör", "Metastas", "Diskbråck", "Spinal stenos", "Inflammation", "Artros", "Kotkompression"],
        },
    ];
    const clinics = [
        {
            name: "Sabbatsberg Röntgen",
            address: "Olivecronas väg 1, 113 24 Stockholm",
            city: "Stockholm"
        },
        {
            name: "Mölndal vid GoCo",
            address: "Entreprenörsstråket 6, 431 53 Mölndal",
            city: "Mölndal"
        },
        {
            name: "Malmö Entré Röntgen",
            address: "Fredsgatan 12, 212 12 Malmö",
            city: "Malmö"
        },
        {
            name: "Umeå Röntgen",
            address: "Renmarkstorget 12, 903 26 Umeå",
            city: "Umeå"
        },
        {
            name: "Karlstad Röntgen",
            address: "Löfbergs Arena, Norra Infarten 79, 654 65 Karlstad",
            city: "Karlstad"
        },
        {
            name: "Sundsvall Röntgen",
            address: "Institutvägen 2, 856 43 Sundsvall",
            city: "Sundsvall"
        },
        {
            name: "Jönköping Röntgen",
            address: "Batterigatan 11, 553 05 Jönköping",
            city: "Jönköping"
        }
    ];


    return (
        <div>
            <TopStrip />
            <Navbar />
            <HelkroppPackages services={services} addToCart={addToCart} />
            <StartHelkropp />
            <div id="helkropp-product">
                <div className="layout-container">
                    <div className="content-wrapper">
                        <div className="left-image">
                            <img src={helkroppService.image} alt={helkroppService.title} className="body-image" />
                        </div>

                        <div className="right-text">
                            <h1 className="title">{helkroppService.title}</h1>
                            <p className="subtitle">{helkroppService.subtitle}</p>

                            <ul className="benefits-list">
                                {helkroppService.includes.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <p
                                className="scroll-link"
                                style={{ cursor: "pointer", color: "black", textDecoration: "underline" }}
                                onClick={() => {
                                    const section = document.getElementById("vad-kan-man-upptacka");
                                    if (section) section.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Vad kan man upptäcka?
                            </p>
                            <p
                                className="scroll-link"
                                style={{ cursor: "pointer", color: "black", textDecoration: "underline" }}
                                onClick={() => {
                                    const section = document.getElementById("hitta-kliniken");
                                    if (section) section.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Hitta kliniken
                            </p>
                            <div className="price-row">
                                <span className="price-new">{helkroppService.price.toLocaleString("sv-SE")} kr</span>
                            </div>

                            <button
                                className="add-to-cart-btn"
                                onClick={() =>
                                    isInCart
                                        ? removeFromCart(helkroppService.id)
                                        : addToCart({
                                            id: helkroppService.id,
                                            name: helkroppService.title,
                                            price: helkroppService.price,
                                            image: helkroppService.image,
                                        })
                                }
                            >
                                {isInCart ? "Ta bort från kundvagn" : "Lägg i kundvagn"}
                            </button>

                        </div>
                    </div>

                    {/* Accordions */}
                    <button className={`acc-toggle ${openSections.before ? "open" : ""}`} onClick={() => toggleSection("before")}>
                        <h3>Inför undersökningen</h3>
                        <span className="acc-icon">{openSections.before ? "▴" : "▾"}</span>
                    </button>
                    {openSections.before && (
                        <div className="acc-body">
                            <p>
                                Efter din beställning kommer vi skicka en remiss för din MR-undersökning. Innan dess får du ett kortare samtal med en remitterande läkare som går igenom din sjukdomshistoria och dina besvär. Därefter skickas remissen vidare till röntgenkliniken.
                            </p>
                            <p>MR är en säker metod som använder magnetfält och radiovågor — helt utan strålning.</p>
                            <ul>
                                <li>Kläder och föremål med metall tas av före undersökningen.</li>
                                <li>Informera om pacemaker, implantat eller metall i kroppen.</li>
                                <li>Meddela om du är gravid eller misstänker graviditet.</li>
                                <li>Kontrastmedel kan förekomma — du får information i förväg.</li>
                            </ul>
                        </div>
                    )}

                    <button className={`acc-toggle ${openSections.after ? "open" : ""}`} onClick={() => toggleSection("after")}>
                        <h3>Uppföljning efter undersökningen</h3>
                        <span className="acc-icon">{openSections.after ? "▴" : "▾"}</span>
                    </button>
                    {openSections.after && (
                        <div className="acc-body">
                            <p>
                                Efter undersökningen granskas bilderna av en specialistläkare i radiologi, som sammanställer ett detaljerat utlåtande till den remitterande läkaren.
                            </p>
                            <p>
                                Läkaren återkopplar till dig med resultat, förklaring av fynd och rekommenderad uppföljning. Om något kräver vidare vård hjälper vi dig vidare.
                            </p>
                        </div>
                    )}

                    <button className={`acc-toggle ${openSections.location ? "open" : ""}`} onClick={() => toggleSection("location")}>
                        <h3>Var kan jag testa mig?</h3>
                        <span className="acc-icon">{openSections.location ? "▴" : "▾"}</span>
                    </button>
                    {openSections.location && (
                        <div className="acc-body">
                            <p> MR Helkropp kan bara utföras på specifika mottagningar </p>
                            <p
                                className="scroll-link"
                                style={{ cursor: "pointer", color: "black", textDecoration: "underline" }}
                                onClick={() => {
                                    const section = document.getElementById("hitta-kliniken");
                                    if (section) section.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Hitta mottagning
                            </p>
                        </div>
                    )}

                    {/* Scan Data */}

                    <div id="vad-kan-man-upptacka" className="mr-scan-container">
                        <h2 className="mr-scan-title">Vad ingår i MR-Helkropp?</h2>
                        <div className="mr-scan-grid">
                            {scanData.map((section, idx) => (
                                <div key={idx} className="mr-scan-category">
                                    <h3 className="mr-scan-category-title">{section.title}</h3>
                                    <ul className="mr-scan-list">
                                        {section.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="hitta-kliniken" className="h-clinics-container">
                        <h1 className="h-clinics-title">MR Helkropp kliniker</h1>
                        <div className="h-clinics-grid">
                            {clinics.map((clinic, idx) => (
                                <div key={idx} className="h-clinic-card">  <p className="clinic-city">{clinic.city}</p>
                                    <h3 className="h-clinic-name">{clinic.name}</h3>
                                    <p className="h-clinic-address">{clinic.address}</p>

                                </div>
                            ))}
                        </div></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
