import React, { useState } from "react";
import "../styles/tests.css";

const categories = [
    { name: "Alla hälsotester", count: 262 },
    { name: "Kampanjer" },
    { name: "Antikroppar", count: 19 },
    { name: "Blodsockertester", count: 4 },
    { name: "Blodstatus", count: 18 },
    { name: "Fertilitetstester", count: 3 },
    { name: "Graviditetstester", count: 3 },
    { name: "Hjärttester", count: 13 },
    { name: "Hormon", count: 27 },
    { name: "Hälsokontroller", count: 37 },
    { name: "Infektion", count: 8 },
    { name: "Inflammation", count: 21 },
    { name: "Levertester", count: 7 },
    { name: "Mage & tarm", count: 3 },
    { name: "Mineraler", count: 11 },
    { name: "Njurtester", count: 11 },
];

const tests = [
    {
        name: "TPO antikroppar",
        category: "Antikroppar",
        description: "Sköldkörteltest TPO – 1 markör",
        price: 279,
        image: "/assets/halsotest.png",
    },
    {
        name: "Blodstatus",
        category: "Blodstatus",
        description: "Helhetsbild av blodets celler – 18 markörer",
        price: 499,
        image: "/assets/halsotest.png",
    },

];

const HealthTests = () => {
    const [selectedCategory, setSelectedCategory] = useState("Alla hälsotester");

    const filteredTests =
        selectedCategory === "Alla hälsotester"
            ? tests
            : tests.filter((t) => t.category === selectedCategory);

    return (
        <div className="healthtests-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h3>Kategorier</h3>
                </div>
                <ul className="category-list">
                    {categories.map((cat) => (
                        <li
                            key={cat.name}
                            className={`category-item ${selectedCategory === cat.name ? "active" : ""
                                }`}
                            onClick={() => setSelectedCategory(cat.name)}
                        >
                            {cat.name} {cat.count && <span>({cat.count})</span>}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main content */}
            <main className="tests-content">
                <h1 className="page-title">Hälsotester</h1>
                <p className="page-description">
                    Vi erbjuder ett brett utbud av hälsotester och hälsokontroller som hjälper dig
                    att förstå och följa upp din hälsa över tid.
                </p>

                <div className="tests-grid">
                    {filteredTests.map((test, i) => (
                        <div className="test-card" key={i}>
                            <img src={test.image} alt={test.name} className="test-image" />
                            <h3>{test.name}</h3>
                            <p className="test-description">{test.description}</p>
                            <div className="test-footer">
                                <span className="price">{test.price} kr</span>
                                <button className="cart-btn"></button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default HealthTests;
