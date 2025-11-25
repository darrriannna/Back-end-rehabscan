import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import React from 'react';
import '../styles/main.css';
import ServiceProductPage from "../components/ServiceProductPage";


function ServiceProduct() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />
                <ServiceProductPage />

            </div>

        </>
    )
}

export default ServiceProduct