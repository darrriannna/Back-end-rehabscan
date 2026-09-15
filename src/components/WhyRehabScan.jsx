import "../styles/varfor.css";
import FAQAccordion from "./FAQAccordition";
import { faqData } from "../data/faqData";

const benefits = [
    {
        number: "01",
        title: "Medicinsk kvalitet",
        text: "Undersökningar och analyser genomförs i samarbete med etablerade vårdgivare och laboratorier, med fokus på kvalitet och tillförlitliga resultat.",
    },
    {
        number: "02",
        title: "Tydliga priser",
        text: "Du ser priset innan du beställer. Vi vill göra privat diagnostik och hälsokontroller tillgängliga utan onödigt krångel.",
    },
    {
        number: "03",
        title: "En tydlig väg från bokning till svar",
        text: "Vi hjälper dig genom processen – från beställning och undersökning till resultat och medicinskt utlåtande.",
    },
    {
        number: "04",
        title: "Personlig vägledning",
        text: "Har du frågor inför eller efter din undersökning finns vi tillgängliga för att hjälpa dig vidare.",
    },
];

const Varfor = () => {
    return (
        <>
            {/* ========================================
                WHY REHABSCAN
            ======================================== */}

            <section className="why-section">
                <div className="why-container">

                    <div className="why-header">
                        <div className="why-heading">
                            <span className="why-eyebrow">
                                Därför RehabScan
                            </span>

                            <h2>
                                Tryggare väg till
                                <span> rätt undersökning.</span>
                            </h2>
                        </div>

                        <div className="why-intro">
                            <p>
                                Vi gör det enklare att få tillgång till
                                medicinska undersökningar och hälsokontroller
                                med tydlig information, personlig vägledning
                                och kvalitet genom hela processen.
                            </p>
                        </div>
                    </div>


                    <div className="why-benefits">
                        {benefits.map((benefit) => (
                            <article
                                className="why-card"
                                key={benefit.number}
                            >
                                <div className="why-card-top">
                                    <span className="why-number">
                                        {benefit.number}
                                    </span>

                                    <span
                                        className="why-check"
                                        aria-hidden="true"
                                    >
                                        ✓
                                    </span>
                                </div>

                                <h3>{benefit.title}</h3>

                                <p>{benefit.text}</p>
                            </article>
                        ))}
                    </div>


                    <div className="why-trust-row">
                        <div className="why-trust-item">
                            <strong>Medicinsk kompetens</strong>
                            <span>
                                Specialistbedömning och etablerade vårdgivare
                            </span>
                        </div>

                        <div className="why-trust-divider" />

                        <div className="why-trust-item">
                            <strong>Personlig vägledning</strong>
                            <span>
                                Hjälp genom hela processen
                            </span>
                        </div>

                        <div className="why-trust-divider" />

                        <div className="why-trust-item">
                            <strong>Tydlig information</strong>
                            <span>
                                Du vet vad som händer och vad nästa steg är
                            </span>
                        </div>
                    </div>

                </div>
            </section>


            {/* ========================================
                FAQ — UNCHANGED
            ======================================== */}

            <section className="faq-section">
                <h2 className="section-title-fragor">
                    Vanliga frågor
                </h2>

                <div className="faq-grid">

                    <div className="faq-column">
                        <h3>MR-undersökning</h3>

                        {faqData.magnetrontgen.map((item, i) => (
                            <FAQAccordion
                                key={i}
                                question={item.q}
                                answer={item.a}
                            />
                        ))}
                    </div>


                    <div className="faq-column">
                        <h3>Hälsokontroller</h3>

                        {faqData.halsokontroller.map((item, i) => (
                            <FAQAccordion
                                key={i}
                                question={item.q}
                                answer={item.a}
                            />
                        ))}
                    </div>


                    <div className="faq-column">
                        <h3>Betalning</h3>

                        {faqData.betalning.map((item, i) => (
                            <FAQAccordion
                                key={i}
                                question={item.q}
                                answer={item.a}
                            />
                        ))}
                    </div>


                    <div className="faq-column">
                        <h3>Så fungerar det</h3>

                        {faqData.saFungerarDet.map((item, i) => (
                            <FAQAccordion
                                key={i}
                                question={item.q}
                                answer={item.a}
                            />
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default Varfor;