import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import React, { useState } from 'react';
import '../styles/main.css';
import Steps from "../components/Steps";

import MapMR from "../components/MRMap";
import Footer from "../components/Footer";

import StartUltraljud from "../components/UltraTopHome";
import UltraljudCards from "../components/UltraljudSelector";


function UltraljudPage() {
    const [selectedGroup, setSelectedGroup] = useState("alla");
    return (
        <>
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