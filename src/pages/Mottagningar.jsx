import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import React from 'react';
import '../styles/main.css';
import Steps from "../components/Steps";
import MapSection from "../components/Map";
import Footer from "../components/Footer";

function Mottagningar() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />
                <MapSection />
                <Steps />
                <Footer />
            </div>

        </>
    )
}

export default Mottagningar