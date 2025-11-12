import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import React from 'react';
import '../styles/main.css';
import Steps from "../components/Steps";
import StartTest from "../components/TestTopHome";



function Test() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />
                <StartTest />
                <Steps />

            </div>

        </>
    )
}

export default Test