import { useRef, useState } from "react";
import "../styles/faq.css";

const groups = [
    {
        title: "Frågor och svar om MR",
        items: [
            {
                question: "Får jag ta del av bilderna från MR-röntgen?",
                answer:
                    "Ja, du får alltid ta del av dina MR-bilder digitalt efter undersökningen.",
            },
            {
                question: "Hur går magnetröntgen till?",
                answer:
                    "En MR-undersökning tar vanligtvis 20–40 minuter och genomförs med modern utrustning.",
            },
        ],
    },
    {
        title: "Frågor om Hälsotester",
        items: [
            {
                question: "Behöver jag vara fastande?",
                answer:
                    "De flesta blodprover kräver inte fasta. Du får tydlig information vid bokning.",
            },
            {
                question: "När får jag mina provsvar?",
                answer:
                    "Resultaten levereras normalt inom 1–3 arbetsdagar digitalt.",
            },
        ],
    },
    {
        title: "Betalning & Villkor",
        items: [
            {
                question: "Kan jag betala med Klarna?",
                answer: "Ja, vi erbjuder betalning via Klarna, Swish och kort.",
            },
            {
                question: "Har ni öppet köp?",
                answer:
                    "Ja, enligt distanshandelslagen erbjuder vi öppet köp på de flesta tjänster.",
            },
        ],
    },
    {
        title: "Återkoppling",
        items: [
            {
                question: "Hur får jag återkoppling från läkare?",
                answer:
                    "Ett skriftligt läkarutlåtande ingår i de flesta större hälsokontroller.",
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
