import React from "react";
import "../styles/presentkort.css";
import TopStrip from "../components/TopStrip";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import TestCarousel from "../components/TestCarousel";

export default function PresentSteps() {
    const steps = [
        {
            id: 1,
            title: "Välj hälsokontroll och kontakta oss",
            desc: "Välj hälsokontroll och kontakta oss via e-post eller telefon. Du får en betalningslänk tillsammans med bekräftelse.",
            img: "/assets/present-step1.png"
        },
        {
            id: 2,
            title: "Vi skickar presentkort med kod samma dag",
            desc: "Du får ett personligt presentkort i PDF-format skickat till din e-post inom några timmar.",
            img: "/assets/present-step2.png"
        },
        {
            id: 3,
            title: "Skicka presentkortet vidare",
            desc: "Mottagaren kontaktar oss för att fylla i uppgifter och välja mottagning.",
            img: "/assets/present-step3.png"
        }
    ];

    return (
        <div>
            <TopStrip />
            <Navbar />

            {/* 🔥 TOP HERO SECTION FROM FIGMA */}
            <section className="present-hero">
                <div className="present-hero-left">

                    <h1 className="present-hero-title">Presentkort</h1>

                    <p className="present-hero-text">
                        Ge någon du älskar mer än bara en gåva — ge trygghet, lugn
                        och möjligheten att verkligen ta hand om sin hälsa.
                        Ett presentkort från RehabScan kan bli den där lilla knuffen
                        som gör stor skillnad: en hälsokontroll som ger svar, klarhet
                        och trygghet i en tid när det behövs som mest.
                    </p>

                    <p className="present-hero-quote">
                        “Jag vill att du ska må bra – både nu och i framtiden.”
                    </p>

                    <p className="present-hero-small">
                        *gäller inte på mr-undersökningar
                    </p>

                    <Link to="/kontakta" className="present-hero-btn">
                        Kontakta oss
                    </Link>
                </div>

                <div className="present-hero-right">
                    <img
                        src="/assets/presentkort.png"
                        alt="Presentkort 3D"
                        className="present-hero-image"
                    />
                </div>
            </section>

            {/* 🔥 STEPS BELOW */}
            <section className="present-container">
                <h3 className="present-sub">Så här fungerar det</h3>

                <div className="present-grid">
                    {steps.map(step => (
                        <div key={step.id} className="present-card">

                            <div className="present-illustration">
                                <img src={step.img} alt={step.title} className="present-img" />

                                <div className="present-overlay">
                                    <h4 className="present-title">{step.title}</h4>
                                    <p className="present-desc">{step.desc}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
            <TestCarousel />

            <Footer />
        </div>
    );
}
