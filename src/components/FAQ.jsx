import { useRef, useState } from "react";
import "../styles/faq.css";

const groups = [
    {
        title: "Frågor och svar om MR",
        items: [
            {
                question: "Får jag ta del av bilderna från MR-röntgen?",
                answer:
                    "För att få tillgång till dina MR-bilder behöver du kontakta den klinik där undersökningen gjordes (Unilabs eller Evidia). Dina röntgenbilder omfattas av sekretess, därför kan vi inte se eller hämta dem utan ditt uttryckliga medgivande. Om din undersökning gjordes hos Unilabs brukar bilderna även bli tillgängliga på *Unilabs Mina sidor* ungefär en vecka efter undersökningen.",
            },
            {
                question: "Hur går magnetröntgen till?",
                answer:
                    "En MR-undersökning tar vanligtvis 20–40 minuter och genomförs med modern utrustning.",
            },
            {
                question: "Hur går en MR-undersökning till?",
                answer: "Du ligger på en brits som förs in i MR-kameran. Undersökningen tar oftast 20–40 minuter och är helt smärtfri."
            },
            {
                question: "Är magnetröntgen farligt?",
                answer: "MR använder magnetfält och radiovågor – ingen strålning. Därför är undersökningen säker även vid upprepade tillfällen."
            },
            {
                question: "Kan jag göra MR om jag är gravid?",
                answer: "MR anses generellt vara säkert under graviditeten, men berätta alltid för kliniken innan undersökningen."
            },
            {
                question: "Får jag svar samma dag?",
                answer: "Radiologen granskar bilderna och skickar ett utlåtande till remitterande läkare. Återkoppling sker vanligtvis inom 1–7 dagar. Ibland kan det ta längre tid, till exempel vid helgdagar eller hög arbetsbelastning på vissa kliniker. Tyvärr kan vi inte påverka detta. "
            },
            {
                question: "Hur gör man för att avboka eller ändra tiden?",
                answer: "Du kan av- eller omboka din tid genom att ringa direkt till den klinik där du har bokat din undersökning. Vi ber dig göra detta senast 24 timmar innan ditt besök. Vid uteblivet besök eller sen avbokning debiteras hela beloppet och återbetalas ej. Om remissen redan har skickats och du väljer att avboka av personliga skäl, tillkommer en remissavgift på 1000 kr som dras från det belopp du får tillbaka."
            },
            {
                question: "Kan jag själv bestämma tiden för undersökningen?",
                answer: "Kliniken som tar emot din remiss kommer att kontakta dig, och tillsammans kommer ni överens om en tid som passar dig bäst."
            },
        ],
    },
    {
        title: "Frågor om Hälsotester",
        items: [

            {
                question: "När får jag mina provsvar?",
                answer:
                    "Resultaten levererar vi normalt inom 1–3 arbetsdagar via telefonsamtal samt epost.",
            },
            {
                question: "Vad ingår vid en hälsokontroll?",
                answer:
                    "Alla våra hälsokontroller inkluderar blodprovtagning, personliga råd från erfarna läkare och dessutom obegränsad tillgång till vår medicinska Hälsokontrollerna skiljer sig åt beroende av vilka olika blodprov som ingår vilket även påverkar priset. Vårt omfattande sortiment av tester täcker allt från grundläggande hälsokontroller till mer specialiserade analyser som kan upptäcka specifika hälsoproblem och sjukdomar.",
            },
            {
                question: "Varför är det bra att göra en hälsokontroll?",
                answer:
                    "En hälsokontroll är ett utmärkt sätt att identifiera riskfaktorer och tidiga tecken på sjukdom. Det ger dig också möjlighet att övervaka effekterna av livsstilsförändringar, vilket hjälper dig att optimera din hälsa över tid. Genom kontinuerlig uppföljning kan du bättre förstå din kropp och fatta välgrundade beslut för ett hälsosammare liv. Regelbundna hälsokontroller kan förebygga utvecklingen av allvarliga sjukdomar genom att möjliggöra tidig intervention och behandling, vilket förbättrar chanserna för ett långt och hälsosamt liv.",
            },
            {
                question: "Hur ofta bör jag göra en hälsokontroll?",
                answer:
                    "Frekvensen för hälsokontroller varierar beroende på ålder, hälsotillstånd och riskfaktorer. Generellt rekommenderas att vuxna genomgår en hälsokontroll en gång per år, men din läkare kan ge mer specifika råd baserat på dina individuella behov.",
            },
            {
                question: "Vilka blodprover ingår i en standard hälsokontroll?",
                answer:
                    "En vanlig hälsokontroll omfattar normalt blodprover som analyserar kolesterolnivåer, blodsocker, njur- och leverfunktion, blodstatus samt vissa hormonmarkörer.",
            },

            {
                question: "Hur förbereder jag mig inför en hälsokontroll?",
                answer:
                    "För att resultaten ska bli så tillförlitliga som möjligt kan det krävas att du fastar 8–12 timmar före blodprovtagningen. Undvik alkohol och hård träning dagen innan provet, och meddela din läkare vilka mediciner du använder eftersom de kan påverka provsvaren.",
            },
            {
                question: "Vad händer efter att jag har gjort en hälsokontroll?",
                answer:
                    "När hälsokontrollen är klar analyseras dina prover och du får ta del av resultatet. Därefter kan du begära ett läkarutlåtande och själv ställa frågor eller dela relevant information med läkaren. Du får också fylla i en hälsodeklaration, vilket är frivilligt. En läkare granskar provsvaren tillsammans med den information du lämnat för att kunna förklara resultatet och ge rekommendationer kring eventuella åtgärder eller förändringar i livsstil.",
            },


        ],
    },
    {
        title: "Betalning & Villkor",
        items: [
            {
                question: "Kan jag betala med Klarna?",
                answer: "Ja, vi erbjuder betalning via Klarna och kort.",
            },
            {
                question: "Vilka regler gäller vid avbokning?",
                answer: "Vid avbokning av personliga skäl efter att din undersökningstid redan är bokad kan kostnaden återbetalas med avdrag för bankavgifter och remisskostnader. Uteblivet besök eller avbokning senare än 24 timmar innan bokad tid debiteras fullt.",
            },
            {
                question: "Hur betalar jag för hälsotester och presentkort?",
                answer: "Betalning för presentkort, hälsotester och hälsokontroller sker online via Klarna Checkout. En administrativ provtagningsavgift tillkommer per beställning och provtagningstillfälle.",
            },
            {
                question: "Vilka betalningsalternativ erbjuder Klarna?",
                answer: "Klarna erbjuder bland annat direktbanksbetalning, kortbetalning, Swish, delbetalning och faktura med 30 dagars kredit. Påminnelseavgift och dröjsmålsränta kan tillkomma vid utebliven betalning.",
            },
            {
                question: "Kan jag få en betalningsanmärkning om jag inte betalar i tid?",
                answer: "Ja, om du inte betalar dina fakturor i tid riskerar du en betalningsanmärkning, vilket kan påverka möjligheten att hyra bostad, teckna abonnemang eller ansöka om lån.",
            }
        ],
    },
    {
        title: "Återkoppling",
        items: [
            {
                question: "Hur får jag återkoppling från läkare?",
                answer:
                    "Ett skriftligt läkarutlåtande ingår i de flesta större hälsokontroller och MR-undersökningar.",
            },
        ],
    },
];

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState(null);
    const refs = useRef([]);

    const toggle = (i) => {
        const newIndex = openIndex === i ? null : i;
        setOpenIndex(newIndex);

        if (newIndex !== null) {
            setTimeout(() => {
                refs.current[newIndex]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }, 150);
        }
    };

    return (
        <div className="faq-container">
            {groups.map((group, gIndex) => (
                <div key={gIndex} className="faq-group">
                    <h2 className="faq-group-title">{group.title}</h2>
                    {group.items.map((item, i) => {
                        // Generate a unique index for openIndex tracking
                        const index = `${gIndex}-${i}`;
                        return (
                            <div
                                key={index}
                                className="faq-item"
                                ref={(el) => (refs.current[index] = el)}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggle(index)}
                                >
                                    <span>{item.question}</span>
                                    <span
                                        className={`faq-symbol ${openIndex === index ? "open" : ""
                                            }`}
                                    >
                                        {openIndex === index ? "−" : "+"}
                                    </span>
                                </button>

                                <div
                                    className={`faq-answer-wrapper ${openIndex === index ? "open" : ""
                                        }`}
                                >
                                    <div className="faq-answer">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
