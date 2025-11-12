import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import React from 'react';
import '../styles/main.css';
import Steps from "../components/Steps";
import MapSection from "../components/Map";

function Mottagningar() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />
                <MapSection />
                <Steps />

            </div>

        </>
    )
}

export default Mottagningar