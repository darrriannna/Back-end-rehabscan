import { useState } from "react";

export default function ProductFAQ({ service }) {
    const [openIndex, setOpenIndex] = useState(null);

    if (!service.faq?.length) {
        return null;
    }

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="product-faq-section">

            <div className="section-heading">
                <span className="section-label">
                    Vanliga frågor
                </span>

                <h2>
                    Vanliga frågor om {service.title}
                </h2>
            </div>

            <div className="product-faq-list">
                {service.faq.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            className={`product-faq-item ${isOpen ? "open" : ""
                                }`}
                            key={index}
                        >
                            <button
                                type="button"
                                className="product-faq-question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={isOpen}
                            >
                                <span>{item.question}</span>
                                <span className="product-faq-icon">
                                    {isOpen ? "−" : "+"}
                                </span>
                            </button>

                            {isOpen && (
                                <div className="product-faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

        </section>
    );
}