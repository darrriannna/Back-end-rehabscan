import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/steps.css";

export default function Steps() {
    const [service, setService] = useState("mri");

    const subtitles = {
        mri: "MR-undersökning – fyra enkla steg",
        health: "Hälsokontroll – fyra enkla steg",
        ultra: "Ultraljud – fyra enkla steg"
    };

    const stepData = {
        mri: [
            ["Beställ MR-undersökning – fyll i förfrågan."],
            ["Vi kontaktar dig för information samt skickar remiss."],
            ["Kliniken du har valt kontaktar dig vid första lediga tillfälle. Undersökningen genomförs på kliniken."],
            ["Specialistläkaren skickar ett utlåtande till dig så fort vi har fått svar."]
        ],
        health: [
            ["Beställ hälsokontroll – fyll i förfrågan. "],
            ["När din bokning bekräftats skickas en länk där du kan välja provtagning nära dig. "],
            ["Vi får dina resultat inom 2 arbetsdagar. Resultat analyseras av specialist."],
            ["Personligt läkarutlåtande via e-post."]
        ],
        ultra: [
            ["Beställ ultraljud – fyll i förfrågan."],
            ["Vi kontaktar dig för information samt skickar remiss."],
            ["Kliniken du har valt kontaktar dig vid första lediga tillfälle. Undersökningen genomförs på kliniken."],
            ["Specialistläkaren skickar ett utlåtande till dig så fort vi har fått svar."]
        ]
    };

    return (
        <section className="steps-section">
            <div className="steps-wrapper">

                {/* TOP ROW */}
                <div className="steps-hero">
                    <motion.img
                        className="steps-video"
                        src="./assets/video-ad-placeholder.png"
                        alt="Hur fungerar RehabScan"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />


                    <div className="steps-title-box">
                        <motion.h2
                            className="steps-title"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Hur fungerar det?
                        </motion.h2>

                        <motion.p
                            className="steps-subtext"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Vi på RehabScan arbetar för att göra hälsoundersökningar enklare, tryggare
                            och mer lättbegripliga. Därför har vi utvecklat en tydlig bokningsprocess
                            och ett transparent flöde från start till mål — för att ge dig tillgång till
                            kvalificerad vård på ett smidigt och överkomligt sätt.
                        </motion.p>
                    </div>
                </div>


                {/* BOTTOM ROW */}
                <div className="steps-content-row">

                    {/* BUTTONS */}
                    <div className="steps-button-group">
                        {[
                            ["mri", "MR-undersökning"],
                            ["health", "Hälsokontroll"],
                            ["ultra", "Ultraljud"]
                        ].map(([key, label]) => (
                            <motion.button
                                key={key}
                                whileTap={{ scale: 0.97 }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setService(key)}
                                className={`steps-btn ${service === key ? "active" : ""}`}
                            >
                                {label}
                            </motion.button>
                        ))}
                    </div>

                    {/* RIGHT SIDE CONTENT */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={service}
                            className="steps-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.35 }}
                        >
                            <h3 className="steps-subtitle">{subtitles[service]}</h3>

                            <div className="steps-list">
                                {stepData[service].map((step, index) => (
                                    <motion.div
                                        key={index}
                                        className="step-box"
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.08 }}
                                    >
                                        <h4>Steg {index + 1}</h4>
                                        <p>{step}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
