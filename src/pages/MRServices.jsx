import Navbar from "../components/Navbar";
import React, { useState } from "react";
import TopStrip from "../components/TopStrip";
import '../styles/main.css';
import Steps from "../components/Steps";
import ServiceSelector from "../components/ServiceSelector";
import StartMR from "../components/MRTopHome";
import MapMR from "../components/MRMap";
import Footer from "../components/Footer";


function MR() {
    const [selectedGroup, setSelectedGroup] = useState("alla");

    return (
        <div className="body">
            <TopStrip />
            <Navbar />

            <StartMR onSelectGroup={setSelectedGroup} />

            <ServiceSelector selectedGroup={selectedGroup} />

            <MapMR />
            <Steps />
            <Footer />
        </div>
    );
}

export default MR