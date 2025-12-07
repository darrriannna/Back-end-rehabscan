import "../styles/varfor.css";
import { useEffect } from "react";

const Varfor = () => {

    useEffect(() => {
        const items = document.querySelectorAll(".why-list li");
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.3}s`;
            item.classList.add("fade-in-up");
        });
    }, []);

    return (
        <section className="why-container">
            <div className="why-content">

                <div className="why-text">
                    <h2>Varför välja <br /> Rehabscan?</h2>

                    <ul className="why-list">
                        <li>
                            <span className="icon">✔</span>
                            Precision och kvalitet – Alla analyser genomförs i nära samarbete med ackrediterade laboratorier för att säkerställa exakta och pålitliga resultat. Vi följer strikta kvalitetskontroller så att du alltid får trygghet i dina resultat.
                        </li>
                        <li>
                            <span className="icon">✔</span>
                            Prisvärdhet – Vi strävar efter att erbjuda högkvalitativa tjänster till konkurrenskraftiga priser. Vår målsättning är att alla ska ha råd med professionell analys utan att kompromissa med kvaliteten.
                        </li>
                        <li>
                            <span className="icon">✔</span>
                            Snabba och tydliga resultat – Våra specialister granskar alla analyser noggrant och levererar resultatet snabbt. Vi ser till att du får all information du behöver för att fatta välgrundade beslut, utan onödig väntetid.
                        </li>
                        <li>
                            <span className="icon">✔</span>
                            Personlig support – Vårt team finns alltid till hands för att svara på frågor och ge vägledning. Vi kombinerar expertis med omtanke för att du ska känna dig trygg genom hela processen.
                        </li>
                    </ul>
                </div>

                <div className="why-video">
                </div>

            </div>
        </section>
    );
};

export default Varfor;

