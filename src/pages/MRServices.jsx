import Navbar from "../components/Navbar";
import ProductCarousel from "../components/ProductsCarousel";
import TopStrip from "../components/TopStrip";
import React from 'react';
import '../styles/main.css';
import Steps from "../components/Steps";
import ServiceSelector from "../components/ServiceSelector";
import StartMR from "../components/MRTopHome";
import MapSection from "../components/Map";

function MR() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />
                <StartMR />
                <ProductCarousel />
                <ServiceSelector />
                <MapSection />
                <Steps />

            </div>

        </>
    )
}

export default MR