import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/servicesData";
import SEO from "./SEO";
import "../styles/dexa.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DexaPage() {
    const dexaServices = services.filter(
        (service) => service.type === "dexa"
    );

    return (
        <>
            <SEO
                title="DEXA-undersökning – kroppssammansättning & bentäthet | RehabScan"
                description="DEXA kan användas för analys av kroppssammansättning och mätning av bentäthet. Läs om våra DEXA-undersökningar och välj den undersökning som passar ditt behov."
                canonical="https://www.rehabscan.se/dexa"
            />
            <Navbar />

            <main className="dexa-page">

                <section className="dexa-hero">
                    <div className="dexa-hero-inner">

                        <span className="dexa-eyebrow">
                            DEXA
                        </span>

                        <h1>
                            DEXA-undersökningar
                        </h1>

                        <p>
                            Få en detaljerad bild av kroppssammansättning
                            eller bentäthet med DEXA. Välj undersökning
                            utifrån vad du vill mäta.
                        </p>

                    </div>
                </section>


                <section className="dexa-services">

                    <div className="dexa-section-heading">
                        <span>Våra undersökningar</span>

                        <h2>Välj DEXA-undersökning</h2>

                        <p>
                            DEXA används för olika typer av mätningar.
                            Läs mer om respektive undersökning nedan.
                        </p>
                    </div>


                    <div className="dexa-service-grid">

                        {dexaServices.map((service) => (
                            <Link
                                to={`/dexa/${service.slug}`}
                                className="dexa-service-card"
                                key={service.id}
                            >
                                <div className="dexa-card-image">
                                    {service.image && (
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                        />
                                    )}
                                </div>

                                <div className="dexa-card-content">

                                    <span className="dexa-card-category">
                                        DEXA
                                    </span>

                                    <h3>{service.title}</h3>

                                    <p>{service.subtitle}</p>

                                    <div className="dexa-card-bottom">
                                        <strong>
                                            {service.price} kr
                                        </strong>

                                        <span>
                                            Läs mer →
                                        </span>
                                    </div>

                                </div>
                            </Link>
                        ))}

                    </div>
                </section>


                <section className="dexa-about">
                    <div className="dexa-about-inner">

                        <div>
                            <span className="dexa-eyebrow">
                                Om metoden
                            </span>

                            <h2>Vad är DEXA?</h2>
                        </div>

                        <div>
                            <p>
                                DEXA, även kallat DXA, är en röntgenbaserad
                                metod som använder en låg dos joniserande
                                strålning för att genomföra mätningar av
                                kroppens vävnader eller skelett.
                            </p>

                            <p>
                                Beroende på vilken undersökning som genomförs
                                kan DEXA användas för analys av
                                kroppssammansättning eller för mätning av
                                bentäthet.
                            </p>
                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}