import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import Footer from "../components/Footer";
import { services } from "../data/servicesData";
import { healthTests } from "../data/healthTestsData";
import "../styles/main.css";
import "../styles/search.css"

import FAQAccordion from "../components/FAQAccordition";
import { faqData } from "../data/faqData";; // <- You will add styling here

function Search() {
    const [query, setQuery] = useState("");

    // Combine MR + Test
    const allItems = [
        ...services.map(s => ({ ...s, type: "mr" })),
        ...healthTests.map(t => ({ ...t, type: "test" }))
    ];

    const filtered = allItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    const resolvePath = (item) => {
        if (item.type === "mr") return `/magnetrontgen/${item.id}`;
        if (item.type === "test") return `/halsokontroll/${item.id}`;
        return "/";
    };


    return (
        <div className="body">
            <TopStrip />
            <Navbar />

            {/* 🔍 SEARCH SECTION */}
            <div className="search-page">

                <h1 className="search-title">Vad letar du efter?</h1>

                <div className="search-container">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Sök MR-undersökning eller hälsokontroller"
                            className="search-input"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className="search-btn">
                            <img src="/assets/search.svg" alt="Sök" className="cart-icon" />
                        </button>
                    </div>

                    {/* Dropdown */}
                    {query && (
                        <div className="search-results">
                            {filtered.length ? (
                                filtered.map((item) => (
                                    <Link
                                        key={item.id + item.type}
                                        to={resolvePath(item)}
                                        className="search-item"
                                        onClick={() => setQuery("")}
                                    >
                                        {item.title}
                                    </Link>
                                ))
                            ) : (
                                <div className="search-item no-results">Inga träffar</div>
                            )}
                        </div>
                    )}
                </div>

                {/* FAQ SECTION */}
                <h2 className="section-title">Vanliga frågor</h2>

                <div className="faq-grid">

                    <div className="faq-column">
                        <h3>MR-undersökning</h3>
                        {faqData.magnetrontgen.map((item, i) => (
                            <FAQAccordion key={i} question={item.q} answer={item.a} />
                        ))}
                    </div>

                    <div className="faq-column">
                        <h3>Hälsokontroller</h3>
                        {faqData.halsokontroller.map((item, i) => (
                            <FAQAccordion key={i} question={item.q} answer={item.a} />
                        ))}
                    </div>

                    <div className="faq-column">
                        <h3>Betalning</h3>
                        {faqData.betalning.map((item, i) => (
                            <FAQAccordion key={i} question={item.q} answer={item.a} />
                        ))}
                    </div>

                    <div className="faq-column">
                        <h3>Så fungerar det</h3>
                        {faqData.saFungerarDet.map((item, i) => (
                            <FAQAccordion key={i} question={item.q} answer={item.a} />
                        ))}
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Search;
