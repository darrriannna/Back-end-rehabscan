import React from "react";
import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import "../styles/Kontakt.css";
import Footer from "../components/Footer";

export default function Kontakt() {
    return (
        <div>
            <TopStrip />
            <Navbar />
            <div className="kontakt-page">
                <h1 className="page-title">Kontakt</h1>

                {/* Support Section */}
                <section className="support">
                    <h2 className="section-title">Support</h2>

                    <div className="support-cards">
                        <div className="card contact-card">
                            <div className="icon phone">
                                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" fill="none" strokeWidth="1.5">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 1.08 4.18 2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.12 1.05.37 2.07.73 3.03a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l1.23-1.23a2 2 0 0 1 2.11-.45c.96.36 1.98.61 3.03.73A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div className="card-body">
                                <span className="contact-line">010 210 22 31</span>
                            </div>
                        </div>

                        <div className="card contact-card">
                            <div className="icon mail">
                                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" fill="none" strokeWidth="1.5">
                                    <path d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                    <path d="M21 7l-9 6-9-6" />
                                </svg>
                            </div>
                            <div className="card-body">
                                <span className="contact-line">info@rehabscan.se</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Opening Hours */}
                <section className="opening-hours">
                    <h2 className="section-title">Öppettider kundtjänst</h2>

                    <div className="hours-table">
                        <div className="row">
                            <div className="label">Måndag - fredag</div>
                            <div className="value">9:00 - 19:00</div>
                        </div>
                        <div className="row">
                            <div className="label">Lördag - Söndag</div>
                            <div className="value">Stängt</div>
                        </div>
                    </div>

                    <p className="note">
                        Vid akuta problem kring provtagning vid laboratoriet eller eventuella tekniska problem
                        utanför ordinarie telefontid, ring 010-210 22 31 och vänta kvar i växeln så hjälper vi dig!
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
}
