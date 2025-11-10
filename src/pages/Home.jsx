import Navbar from "../components/Navbar";
import ProductCarousel from "../components/ProductsCarousel";
import TestCarousel from "../components/TestCarousel";
import StartHome from "../components/StartHome";
import TopStrip from "../components/TopStrip";
import React from 'react';
import '../styles/main.css';
import Steps from "../components/Steps";

function Home() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />
                <StartHome />
                <Steps />
                <TestCarousel />
                <ProductCarousel />
            </div>

        </>
    )
}

export default Home