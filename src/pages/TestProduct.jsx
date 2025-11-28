import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import React from 'react';
import '../styles/main.css';

import TestProductPage from "../components/TestProductPage";
import Footer from "../components/Footer";


function TestProduct() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />
                <TestProductPage />
                <Footer />
            </div>

        </>
    )
}

export default TestProduct