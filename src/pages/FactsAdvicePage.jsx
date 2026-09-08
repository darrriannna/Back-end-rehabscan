import React, { useState } from "react";
import SEO from "../components/SEO";
import ArticleCard from "../components/ArticleCard";

import {
    articles,
    articleCategories,
} from "../data/articlesData";

import "../styles/facts-advice.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FactsAdvicePage() {

    const [activeCategory, setActiveCategory] = useState("Alla");

    const filteredArticles =
        activeCategory === "Alla"
            ? articles
            : articles.filter(
                article => article.category === activeCategory
            );

    return (
        <>
            <SEO
                title="Fakta & råd om MR, blodprov och ultraljud | RehabScan"
                description="Läs medicinskt granskade artiklar och guider om MR-undersökningar, blodprov, hälsokontroller och ultraljud från RehabScan."
                canonical="https://www.rehabscan.se/fakta-och-rad"
            />
            <Navbar />
            <main className="facts-page">

                {/* HERO */}

                <section className="facts-hero">
                    <div className="facts-container">

                        <span className="facts-eyebrow">
                            RehabScan Kunskapsbank
                        </span>

                        <h1>
                            Fakta & råd om din hälsa
                        </h1>

                        <p className="facts-hero-text">
                            Här hittar du artiklar och guider om
                            MR-undersökningar, hälsokontroller,
                            blodprov och ultraljud. Innehållet
                            tas fram tillsammans med medicinska
                            specialister.
                        </p>

                    </div>
                </section>


                {/* CATEGORY FILTER */}

                <section className="facts-filter-section">
                    <div className="facts-container">

                        <div className="facts-categories">

                            {articleCategories.map(category => (
                                <button
                                    key={category}
                                    className={
                                        activeCategory === category
                                            ? "facts-category active"
                                            : "facts-category"
                                    }
                                    onClick={() =>
                                        setActiveCategory(category)
                                    }
                                >
                                    {category}
                                </button>
                            ))}

                        </div>

                    </div>
                </section>


                {/* ARTICLES */}

                <section className="facts-articles-section">

                    <div className="facts-container">

                        <div className="facts-section-heading">
                            <div>
                                <span className="facts-small-title">
                                    Kunskap från våra specialister
                                </span>

                                <h2>
                                    Senaste artiklarna
                                </h2>
                            </div>
                        </div>


                        <div className="articles-grid">

                            {filteredArticles.map(article => (
                                <ArticleCard
                                    key={article.id}
                                    article={article}
                                />
                            ))}

                        </div>

                    </div>

                </section>


                {/* TRUST SECTION */}

                <section className="facts-trust">

                    <div className="facts-container">

                        <div className="facts-trust-inner">

                            <div>

                                <span className="facts-small-title">
                                    Medicinskt granskat innehåll
                                </span>

                                <h2>
                                    Information du ska kunna förstå
                                </h2>

                                <p>
                                    Vi vill göra medicinsk information
                                    tydligare och mer lättillgänglig.
                                    Våra artiklar tas fram med stöd av
                                    relevant medicinsk kompetens och
                                    uppdateras när informationen behöver
                                    förändras.
                                </p>

                            </div>

                            <div className="facts-trust-items">

                                <div>
                                    <strong>Medicinskt granskat</strong>
                                    <span>
                                        Innehåll granskas av relevant specialist.
                                    </span>
                                </div>

                                <div>
                                    <strong>Tydligt språk</strong>
                                    <span>
                                        Medicinsk information förklarad på
                                        ett begripligt sätt.
                                    </span>
                                </div>

                                <div>
                                    <strong>Regelbundet uppdaterat</strong>
                                    <span>
                                        Artiklar visar när de senast har
                                        granskats.
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </main>
            <Footer />
        </>
    );
}