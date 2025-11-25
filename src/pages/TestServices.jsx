import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import React from 'react';
import '../styles/main.css';
import StartTest from "../components/TestTopHome";
import HealthTests from "../components/HealthTests";



function Test() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />
                <StartTest />
                <HealthTests />

            </div>

        </>
    )
}

export default Test