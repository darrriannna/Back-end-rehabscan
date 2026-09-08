import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import React, { useState } from 'react';
import '../styles/main.css';
import Steps from "../components/Steps";

import MapMR from "../components/MRMap";
import Footer from "../components/Footer";

import StartUltraljud from "../components/UltraTopHome";
import UltraljudCards from "../components/UltraljudSelector";
import SEO from "../components/SEO";

function UltraljudPage() {
    const [selectedGroup, setSelectedGroup] = useState("alla");
    return (
        <>
            <SEO
                title="Ultraljud i Sverige – Boka undersökning | RehabScan"
                description="Boka ultraljud via RehabScan. Undersökningar av bland annat buk, lever, njurar, sköldkörtel och andra områden."
                canonical="https://www.rehabscan.se/ultraljud"
            />
            <div className="body">
                <TopStrip />
                <Navbar />
                <StartUltraljud onSelectGroup={setSelectedGroup} />
                <UltraljudCards selectedGroup={selectedGroup} />
                <MapMR />
                <Steps />
                <Footer />
            </div>

        </>
    )
}

export default UltraljudPage