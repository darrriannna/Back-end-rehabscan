import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/cancel.css";
import logo from "/assets/logo.png"; // make sure the path is correct

const Cancel = () => {
    const navigate = useNavigate();

    return (
        <div className="cancel-wrapper">
            <div className="cancel-card">
                <img src={logo} alt="Rehabscan Sverige Logo" className="cancel-logo" />

                <h1 className="cancel-title">Betalningen misslyckades ❌</h1>
                <p className="cancel-message">
                    Något gick snett under betalningen.<br />
                    Försök gärna igen.
                </p>

                <button className="retry-button" onClick={() => navigate("/varukorg")}>
                    Försök igen
                </button>

                <button className="home-button" onClick={() => navigate("/")}>
                    Tillbaka till startsidan
                </button>
            </div>
        </div>
    );
};

export default Cancel;
