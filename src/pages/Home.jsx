import Navbar from "../components/Navbar";
import ProductCarousel from "../components/ProductsCarousel";
import TestCarousel from "../components/TestCarousel";
import StartHome from "../components/StartHome";
import TopStrip from "../components/TopStrip";
import React from 'react';
import '../styles/main.css';
import Steps from "../components/Steps";
import LinksHome from "../components/LinksHome";
import Footer from "../components/Footer";

function Home() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />
                <StartHome />
                <LinksHome />
                <Steps />
                <TestCarousel />
                <ProductCarousel />
                <Footer />
            </div>

        </>
    )
}

export default Home