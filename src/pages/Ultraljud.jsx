import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import React from 'react';
import '../styles/main.css';
import Steps from "../components/Steps";

import MapMR from "../components/MRMap";
import Footer from "../components/Footer";

import StartUltraljud from "../components/UltraTopHome";
import UltraljudCards from "../components/UltraljudSelector";


function UltraljudPage() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />
                <StartUltraljud />
                <UltraljudCards />
                <MapMR />
                <Steps />
                <Footer />
            </div>

        </>
    )
}

export default UltraljudPage