import React from "react";
import "../styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-contact">
                    <h2>Kontakta oss</h2>
                    <p className="footer-phone">📞 010 210 22 31</p>
                    <p className="footer-email">✉️ info@rehabscan.se</p>
                </div>
            </div>

            <div className="footer-links">
                <div className="footer-column">
                    <h3>Inför blodprov och röntgen</h3>
                    <a href="#">Inför blodprov och röntgen</a>
                    <a href="#">Mottagningar</a>
                </div>

                <div className="footer-column">
                    <h3>Information</h3>
                    <a href="#">Köpvillkor</a>
                    <a href="#">Om oss</a>
                </div>

                <div className="footer-column">
                    <h3>Fakta & råd</h3>
                    <a href="#">Hälsotester</a>
                    <a href="#">MR-undersökningar</a>
                    <a href="#">Helkroppsscreening</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 – RehabScan Sverige – Registrerad vårdgivare hos IVO</p>
                <div className="payment-logos">
                    <span>Klarna</span>
                    <span>Mastercard</span>
                    <span>Visa</span>
                    <span>Swish</span>
                </div>
            </div>
        </footer>
    );
}



