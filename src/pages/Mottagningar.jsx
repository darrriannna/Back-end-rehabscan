import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import React from 'react';
import '../styles/main.css';
import Steps from "../components/Steps";
import MapSection from "../components/Map";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function Mottagningar() {

    return (
        <>
            <SEO
                title="Mottagningar för MR, ultraljud & provtagning | RehabScan"
                description="Se RehabScans anslutna mottagningar för MR, ultraljud och provtagning på flera orter i Sverige."
                canonical="https://www.rehabscan.se/mottagningar"
            />
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