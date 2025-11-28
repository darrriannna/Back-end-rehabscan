import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import React from 'react';
import '../styles/main.css';
import Steps from "../components/Steps";
import Footer from "../components/Footer";
import FAQGroups from "../components/FAQ";

function HurFungerar() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />

                <Steps />
                <FAQGroups />
                <Footer />
            </div>

        </>
    )
}

export default HurFungerar