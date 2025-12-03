import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/success.css";
import logo from "/assets/logo.png"; // <-- Update with your logo path

const Success = () => {
    const navigate = useNavigate();

    return (
        <div className="success-wrapper">
            <div className="success-card">
                <img src={logo} alt="Rehabscan Sverige Logo" className="success-logo" />

                <h1 className="success-title">Betalningen lyckades! 🎉</h1>
                <p className="success-message">
                    Tack för att du valde <strong>Rehabscan Sverige</strong>.<br />
                    Vi skickar en bekräftelse samt kvitto till din e-post.
                </p>

                <button className="home-button" onClick={() => navigate("/")}>
                    Tillbaka till startsidan
                </button>
            </div>
        </div>
    );
};

export default Success;
