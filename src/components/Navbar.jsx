import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const { cart } = useCart();


    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="logo">
                        <Link to="/"><img className="logo-nav" src="./assets/logo.png" alt="logo" /></Link>
                    </div>

                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        {/* Close button for mobile menu */}
                        <li className="close-menu">
                            <button onClick={toggleMenu}>✕</button>
                        </li>

                        <li><Link to="/halsotester">Hälsotester</Link></li>
                        <li><Link to="/mr-undersokningar">MR-undersökningar</Link></li>
                        <li><Link to="/sa-fungerar-det">Så fungerar det</Link></li>
                        <li><Link to="/mottagningar">Mottagningar</Link></li>
                        <li><Link to="/about">Om oss</Link></li>
                        <li><Link to="/contact">Kontakt</Link></li>
                    </ul>

                    <div className="nav-actions">
                        <Link to="/search" className="icon-btn"> <img
                            src="/assets/search.svg"
                            alt="Sök"
                            className="cart-icon"
                        /></Link>
                        <Link to="/varukorg" className="cart-link">
                            <img
                                src="/assets/cart-icon.svg"
                                alt="Cart"
                                className="cart-icon"
                            />
                            {cart.length > 0 && (
                                <span className="cart-count">{cart.length}</span>
                            )}
                        </Link>
                        <button className="menu-toggle" onClick={toggleMenu}>
                            ☰
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
