import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import React from 'react';
import '../styles/main.css';

import TestProductPage from "../components/TestProductPage";


function TestProduct() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />
                <TestProductPage />

            </div>

        </>
    )
}

export default TestProduct