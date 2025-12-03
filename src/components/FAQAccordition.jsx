import { useRef, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQAccordion({ question, answer }) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);

    return (
        <div className="faq-item">
            <button className="faq-question" onClick={() => setOpen(!open)}>
                <span>{question}</span>
                {open ? <FiMinus size={18} /> : <FiPlus size={18} />}
            </button>

            <div
                ref={contentRef}
                className="faq-content"
                style={{
                    maxHeight: open ? contentRef.current?.scrollHeight + "px" : "0px",
                }}
            >
                <div className="faq-answer">{answer}</div>
            </div>
        </div>
    );
}
