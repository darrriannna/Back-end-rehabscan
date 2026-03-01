import React from "react";
import "../styles/om-oss.css";
import Navbar from "../components/Navbar";
import TopStrip from "../components/TopStrip";
import Footer from "../components/Footer";
import GoogleReviews from "../components/Reviews";

export default function OmOss() {
    return (
        <div><TopStrip />
            <Navbar />
            <div className="omoss-page">

                {/* HERO SECTION */}

                <section className="hero-section">
                    <h1 className="hero-title">
                        Hälsokoll som gör skillnad – i rätt tid
                    </h1>

                    <div className="hero-text">
                        <p>
                            På Rehabscan Sverige tror vi att tidig upptäckt och rätt insatser kan förändra liv. Vår vision är att göra det enklare för människor att få snabb tillgång till viktig rehabiliteringsdata – oavsett var de bor eller vilka resurser de har.
                        </p>
                        <p>
                            Genom att erbjuda avancerade funktionella tester och digital uppföljning ger vi dig möjlighet att förstå hur din kropp mår, återhämtar sig och utvecklas över tid – på dina villkor.
                        </p>
                        <p>
                            I dag hamnar många i vårdköer för sent i processen – när besvären redan blivit långvariga. Vi vill skapa ett skifte där rehabilitering inte är något som påbörjas först när problem uppstått, utan en naturlig del av förebyggande hälsovård.
                        </p>
                        <p>
                            Vi vet att varje individ är unik. Därför baseras våra insikter på objektiva rörelsedata, i kombination med dina upplevelser och mål. Tillsammans skapar vi en tydlig plan för att minska smärta, stärka kroppen och förebygga återfall.
                        </p>
                        <p>
                            Rehabscan Sverige kombinerar klinisk kompetens med modern teknologi för en bättre vårdupplevelse – mer tillgänglig, mer träffsäker och mer proaktiv.
                        </p>
                    </div>
                </section>
                <section className="hero-section">
                    <div className="hero-image">
                        <img src="/assets/spine.png" alt="ländrygg-mr" />
                    </div>

                    <div className="hero-text text-om">
                        <h1 className="hero-title-om">
                            Våra specialister
                        </h1>
                        <p className="italic">
                            “När kroppen signalerar att något är fel ska tiden till svar aldrig vara ett hinder.
                            Vårt uppdrag är att göra avancerad diagnostik snabbt tillgänglig för alla — utan omvägar, remisstvång eller långa väntetider.
                            Med MR-undersökningar och blodtester ger vi rätt underlag för att ta hand om hälsan i tid.
                            Det är så vi skapar trygghet, förebygger problem och ger människor kontroll över sin egen hälsa.”
                        </p>
                        <p className="quote-doctor">
                            — Specialistläkare, Rehabscan Sverige
                        </p>
                    </div>
                </section>

                {/* 3 COLUMNS SECTION */}
                <section className="pillars-section">
                    <div className="pillar">
                        <h3>Kvalitet – tillförlitliga resultat för säkra beslut</h3>
                        <p>
                            Vi samarbetar med legitimerade fysioterapeuter och använder validerade mätmetoder för att säkerställa hög medicinsk kvalitet. Varje datapunkt analyseras noggrant för att ge dig insikter du kan lita på.
                        </p>
                    </div>

                    <div className="pillar">
                        <h3>Tillgänglighet – rehabilitering när du behöver den</h3>
                        <p>
                            Med ett växande nätverk av kliniker och digitala tjänster gör vi det enkelt för dig att ta kontroll över din rehabilitering. Snabbare hjälp betyder snabbare väg tillbaka till livet du vill leva.
                        </p>
                    </div>
                    <div className="pillar">
                        <img className="pillar-image" src="/assets/om-oss.png" alt="" />
                    </div>

                </section>

                <GoogleReviews />

                {/* ACCREDITATION SECTION */}
                <section className="labs-section">
                    <h2 className="labs-title">
                        Dina blodprover och undersökningar genomförs av ackrediterade vårdgivare
                    </h2>
                    <p className="labs-text">
                        Alla tester genomförs av certifierade vårdgivare med hög medicinsk kompetens. Vi följer etablerade standarder för säker, träffsäker och professionell rehabilitering.
                    </p>

                    <div className="logos">
                        <img src="./assets/synlab.png" alt="Synlab" />
                        <img src="./assets/unilabs.png" alt="Unilabs" />
                    </div>
                </section>

            </div>
            <Footer /></div>
    );
}
