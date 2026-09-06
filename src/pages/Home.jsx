import Navbar from "../components/Navbar";

import TestCarousel from "../components/TestCarousel";
import StartHome from "../components/StartHome";
import TopStrip from "../components/TopStrip";
import React from 'react';
import '../styles/main.css';
import Steps from "../components/Steps";
import LinksHome from "../components/LinksHome";
import Footer from "../components/Footer";
import Varfor from "../components/WhyRehabScan";
import GoogleMap from "../components/Reviews";
import HormonesCarousel from "../components/HormonesCarousel";

function Home() {

    return (
        <>
            <div className="body">
                <TopStrip />
                <Navbar />
                <StartHome />
                <h1>MR-undersökning, hälsokontroller och ultraljud i Sverige</h1>
                <h2>Hälsoundersökningar och MR utan onödig väntan</h2>
                <p>RehabScan gör det enklare att få tillgång till MR-undersökningar, hälsokontroller, blodprover och ultraljud i Sverige. Vi hjälper dig genom hela processen – från bokning och medicinsk bedömning till undersökning och utlåtande från specialist.

                    Vi erbjuder flera typer av MR-undersökningar, bland annat MR av knä, axel, rygg, höft, fot, hand, hjärna och prostata. Du kan även välja mellan olika hälsokontroller och blodprov samt ultraljudsundersökningar av exempelvis buk, lever, njurar och sköldkörtel.

                    Våra undersökningar utförs på etablerade kliniker på flera orter i Sverige. När du bokar hjälper vi dig att hitta en lämplig mottagning och guidar dig genom hela processen.</p>
                <LinksHome />
                <Steps />
                <HormonesCarousel />
                <TestCarousel />
                <GoogleMap />
                <Varfor />
                <Footer />
            </div>

        </>
    )
}

export default Home