import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import React from 'react';
import '../styles/main.css';
import StartTest from "../components/TestTopHome";
import HealthTests from "../components/HealthTests";
import Footer from "../components/Footer";



function Test() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />
                <StartTest />
                <HealthTests />
                <Footer />
            </div>

        </>
    )
}

export default Test