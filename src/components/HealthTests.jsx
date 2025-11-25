import React from "react";
import HealthTestCard from "../components/HealthTestCard";
import { healthTests } from "../data/healthTestsData";
import "../styles/tests.css";

export default function HealthTests() {
    return (
        <div className="health-grid-container">
            <h2>Hälsokontroller</h2>

            <div className="health-grid">
                {healthTests.map(test => (
                    <HealthTestCard key={test.id} test={test} />
                ))}
            </div>
        </div>
    );
}
