import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import React, { useState } from 'react';
import '../styles/main.css';
import StartTest from "../components/TestTopHome";
import HealthTests from "../components/HealthTests";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function Test() {

    const [selectedGroup, setSelectedGroup] = useState("alla");

    return (
        <><SEO
            title="Hälsokontroller med blodprov | RehabScan"
            description="Hälsokontroller med blodprov, analys av viktiga hälsomarkörer och läkargranskning. Se våra tester och boka provtagning."
            canonical="https://www.rehabscan.se/halsotester"
        />
            <div className="body">
                <TopStrip />
                <Navbar />

                {/* ✅ PASS HANDLER */}
                <StartTest onSelectGroup={setSelectedGroup} />

                {/* ✅ PASS STATE */}
                <HealthTests selectedGroup={selectedGroup} />

                <Footer />
            </div></>
    );
}

export default Test;