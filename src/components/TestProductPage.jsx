// src/pages/TestProductPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { healthTests } from "../data/healthTestsData";
import { markerGroups } from "../data/healthTestsData";
import { FiShoppingCart, FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import "../styles/test-product.css";

export default function TestProductPage() {
    const { id } = useParams();
    const { addToCart, removeFromCart, cart } = useCart();
    const [openSections, setOpenSections] = useState({
        common: true,
        before: false,
        faq: false,
        where: false,
    });

    const test = healthTests.find((t) => Number(t.id) === Number(id));
    if (!test) return <h2>Test hittades inte</h2>;

    const isInCart = cart.some((item) => item.id === test.id);
    const priceNumber = Number(String(test.newPrice).replace(/\s+/g, ""));

    const toggleSection = (key) =>
        setOpenSections((s) => ({ ...s, [key]: !s[key] }));

    // --------------------------
    // ❤️ Extract correct markers
    // --------------------------
    const raw = markerGroups[test.id] || {};

    const markerGroupNames = Object.keys(raw);

    const allMarkers = markerGroupNames.flatMap((group) =>
        raw[group].map((name, index) => ({
            id: `${group}-${index}`,
            name,
            groupName: group,
        }))
    );

    const [selectedGroup, setSelectedGroup] = useState("Alla");

    const filteredMarkers =
        selectedGroup === "Alla"
            ? allMarkers
            : allMarkers.filter((m) => m.groupName === selectedGroup);

    return (
        <div className="product-page">
            <div className="product-inner">
                {/* LEFT IMAGE */}
                <aside className="product-media">

                    <div className="media-block" style={{ background: test.bg || "#fff" }}>
                        <img src={test.image} alt={test.title} className="product-image" />
                    </div>
                </aside>

                {/* RIGHT CONTENT */}
                <main className="product-content">
                    <h1 className="product-title">{test.title}</h1>
                    <p className="product-sub">{test.subtitle}</p>

                    <div className="meta-row">
                        <span className="markers">⚙ {allMarkers.length} markörer</span>
                    </div>

                    <div className="price-row">
                        <span className="price-old">{test.oldPrice} kr</span>
                        <span className="price-new">{test.newPrice} kr</span>
                    </div>

                    <ul className="feature-list">
                        {test.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>

                    <div className="action-row">
                        <div className="button-row">
                            <button
                                className="cart-btn"
                                onClick={() =>
                                    isInCart
                                        ? removeFromCart(test.id)
                                        : addToCart({
                                            id: test.id,
                                            name: test.title,
                                            image: test.image,
                                            price: priceNumber,
                                        })
                                }
                            >
                                {isInCart ? (
                                    <FiX size={20} color="#fff" />
                                ) : (
                                    <FiShoppingCart size={20} color="#fff" />
                                )}
                            </button>
                        </div>


                        <button
                            className="secondary-action"
                            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
                        >
                            Visa markörer ↓
                        </button>
                    </div>

                    {/* Accordions */}
                    <section className="accordion">
                        {/* COMMON */}
                        <button
                            className={`acc-toggle ${openSections.faq ? "open" : ""}`}
                            onClick={() => toggleSection("common")}
                        >

                            <h3>Information om {test.title}</h3>
                            <span className="acc-icon">{openSections.common ? "▴" : "▾"}</span>
                        </button>
                        {openSections.common && (
                            <div className="acc-body">
                                <h4>Vad analyseras i hälsokontrollen?</h4>
                                <p>
                                    Dina blodprover analyseras på ett ackrediterat laboratorium och granskas av en legitimerad läkare.
                                    Analysen omfattar bland annat blodstatus, blodsocker, hjärta & kärl, njurar, lever, vitaminer och
                                    mineraler, sköldkörtel, inflammation och hormoner – områden som tillsammans ger en tydlig medicinsk
                                    helhetsbild.
                                </p>
                                <p>
                                    När du beställer skickas remissen direkt till vald provtagningsenhet, och du kan ofta lämna prover
                                    redan nästa dag. Följ våra instruktioner inför provtagning för bästa resultat.
                                </p>
                            </div>
                        )}

                        {/* BEFORE */}
                        <button
                            className={`acc-toggle ${openSections.faq ? "open" : ""}`}
                            onClick={() => toggleSection("before")}
                        >


                            <h3>Inför provtagning</h3>
                            <span className="acc-icon">{openSections.before ? "▴" : "▾"}</span>
                        </button>
                        {openSections.before && (
                            <div className="acc-body">
                                <ul>
                                    <li>Fasta 8–10 timmar (drick vatten).</li>
                                    <li>Undvik hård träning 24 timmar innan provtagning.</li>
                                    <li>Informera om mediciner som kan påverka provresultatet.</li>
                                </ul>
                            </div>
                        )}

                        {/* FAQ */}
                        <button
                            className={`acc-toggle ${openSections.faq ? "open" : ""}`}
                            onClick={() => toggleSection("faq")}
                        >
                            <h3>Frågor och svar</h3>
                            <span className="acc-icon">{openSections.faq ? "▴" : "▾"}</span>
                        </button>
                        {openSections.faq && (
                            <div className="acc-body">
                                <strong>Hur lång tid tar analysen?</strong>
                                <p>2–5 arbetsdagar, beroende på markörer.</p>

                                <strong>Ingår läkarkommentar?</strong>
                                <p>Ja, en legitimerad läkare kommenterar relevanta avvikelser.</p>
                            </div>
                        )}

                        {/* WHERE */}
                        <button
                            className={`acc-toggle ${openSections.faq ? "open" : ""}`}
                            onClick={() => toggleSection("where")}
                        >

                            <h3>Här kan du testa dig</h3>
                            <span className="acc-icon">{openSections.where ? "▴" : "▾"}</span>
                        </button>
                        {openSections.where && (
                            <div className="acc-body">
                                <p>
                                    Vi samarbetar med flera provtagningscentraler. Du väljer den som passar efter vi skickar bekräftelse eller vi kan boka tid åt dig.
                                </p>
                            </div>
                        )}
                    </section>

                    {/* MARKÖRER – reference layout */}

                </main>
            </div><section className="healthtests-container" style={{ marginTop: "40px" }}>

                {/* FILTER */}
                <aside className="sidebar">
                    <div className="sidebar-header">
                        <h3>Markörer i detta test</h3>
                    </div>

                    <ul className="category-list">
                        <li
                            className={`category-item ${selectedGroup === "Alla" ? "active" : ""}`}
                            onClick={() => setSelectedGroup("Alla")}
                        >
                            Alla markörer ({allMarkers.length})
                        </li>

                        {markerGroupNames.map((g) => (
                            <li
                                key={g}
                                className={`category-item ${selectedGroup === g ? "active" : ""}`}
                                onClick={() => setSelectedGroup(g)}
                            >
                                {g} ({raw[g].length})
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* RESULT GRID */}
                <main className="tests-content">
                    <h2 className="page-title">Markörer</h2>

                    <div className="tests-grid">
                        {filteredMarkers.map((marker) => (
                            <div className="test-card-markers" key={marker.id}>
                                <h3>{marker.name}</h3>
                                <p className="test-description">{marker.groupName}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </section>
        </div>
    );
}
