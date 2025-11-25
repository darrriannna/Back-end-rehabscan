import React from 'react';
import '../styles/steps.css';

export default function Steps() {
    return (
        <section className="private-mri-section">
            <div className="steps-home-container">
                <div className="steps-layout">
                    <div className="gif-container">
                        <video
                            className="steps-video"
                            src="https://rzxtljoehojvjtswrjao.supabase.co/storage/v1/object/public/GIFs/video-ad.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>

                    <div className="steps-right">
                        <h2 className="steps-title">Beställ magnetröntgen – fyra enkla steg</h2>
                        <div className="steps-list">
                            {[
                                {
                                    step: "Steg 1",
                                    title: "Beställ magnetröntgen",
                                    text: "Lägg in dina uppgifter och önskemål för undersökningen. Det tar bara några minuter.",
                                },
                                {
                                    step: "Steg 2",
                                    title: "Aktivera remissen",
                                    text: "Efter förfrågan blir du kontaktad för att bekräfta tid och eventuella detaljer.",
                                },
                                {
                                    step: "Steg 3",
                                    title: "Genomför röntgen",
                                    text: "Du får din tid inom 1–7 arbetsdagar och besöker kliniken för din MR-undersökning.",
                                },
                                {
                                    step: "Steg 4",
                                    title: "Resultat och utlåtande",
                                    text: "Efter undersökningen får du en personlig rapport med MR-svar från specialistläkare.",
                                },
                            ].map((step, index) => (
                                <div className="step-card" key={index}>
                                    <h4 className="step-label">{step.step}</h4>
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-text">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}