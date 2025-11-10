import React, { useEffect, useState } from 'react';
import "../styles/navbar.css";

const TopStrip = () => {
    const messages = [
        "Bästa priser på hälsoundersökningar i Sverige",
        "1-7 arbetsdagar väntetid på MR"
    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 11000);

        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <div className="top-strip">
            <p className="top-strip-text">{messages[currentMessageIndex]}</p>
        </div>
    );
};

export default TopStrip;
