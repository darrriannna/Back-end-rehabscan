import React from "react";
import HealthTestCard from "../components/HealthTestCard";
import { healthTests } from "../data/healthTestsData";
import "../styles/tests.css";

export default function HealthTests({ selectedGroup }) {

    const filteredTests =
        selectedGroup === "alla"
            ? healthTests
            : healthTests.filter(test => test.group === selectedGroup);

    return (
        <div id="services" className="health-grid-container">
            <h2>Hälsotester & Intyg</h2>

            <div className="health-grid">
                {filteredTests.map(test => (
                    <HealthTestCard key={test.id} test={test} />
                ))}
            </div>
        </div>
    );
}