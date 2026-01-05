// ServiceProductPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../data/servicesData";
import { FiShoppingCart, FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/service-product.css";

export default function ServiceProductPage() {
    const { id } = useParams();
    const { addToCart, removeFromCart, cart } = useCart();
    const service = services.find((s) => s.id === Number(id));
    if (!service) return <h2>Tjänst hittades inte</h2>;
    const code = service.title.slice(0, 3).toUpperCase();

    const [openSections, setOpenSections] = useState({
        when: true,
        detectable: false,
        before: false,
        after: false,
        location: false,
    });


    const isInCart = cart.some((item) => item.id === service.id);

    const toggleSection = (key) =>
        setOpenSections((s) => ({ ...s, [key]: !s[key] }));

    return (
        <div className="product-page">
            <div className="product-inner">
                {/* LEFT IMAGE */}
                <aside className="product-media">
                    <div className="media-block">

                        {service.image.includes("placeholder-service.png") ? (
                            <div className="mr-im-top">
                                <div className="mr-im-code">
                                    {code}
                                </div>
                            </div>
                        ) : (
                            <img src={service.image} alt={service.title} className="product-image" />
                        )}

                    </div>

                </aside>

                {/* RIGHT CONTENT */}
                <main className="product-content">
                    <h2 className="product-title">{service.title}</h2>
                    <p className="product-sub">{service.subtitle}</p>

                    <div className="price-row">
                        {service.oldPrice && (
                            <span className="price-old">{service.oldPrice} kr</span>
                        )}
                        <span className="price-new">{service.price} kr</span>
                    </div>

                    <ul className="feature-list">
                        {service.includes?.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>

                    {/* CART BUTTON */}
                    <div className="action-row">
                        <div className="button-row">
                            <button
                                className="cart-btn"
                                onClick={() =>
                                    isInCart
                                        ? removeFromCart(service.id)
                                        : addToCart({
                                            id: service.id,
                                            name: service.title,
                                            price: service.price,
                                            type: service.type,
                                            image: service.image,
                                        })
                                }
                            >
                                {isInCart ? (
                                    <FiX size={20} color="#fff" />
                                ) : (
                                    <FiShoppingCart size={20} color="#fff" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* ACCORDIONS */}
                    <section className="accordion">

                        {/* WHEN RECOMMENDED */}
                        <button
                            className={`acc-toggle ${openSections.when ? "open" : ""}`}
                            onClick={() => toggleSection("when")}
                        >
                            <h3>När rekommenderas en MR av området?</h3>
                            <span className="acc-icon">{openSections.when ? "▴" : "▾"}</span>
                        </button>
                        {openSections.when && (
                            <div className="acc-body">
                                <p>{service.whenRecommended}</p>
                            </div>
                        )}

                        {/* FINDINGS */}
                        <button
                            className={`acc-toggle ${openSections.detectable ? "open" : ""}`}
                            onClick={() => toggleSection("detectable")}
                        >
                            <h3>Vad kan man upptäcka vid en MR-undersökning?</h3>
                            <span className="acc-icon">{openSections.detectable ? "▴" : "▾"}</span>
                        </button>
                        {openSections.detectable && (
                            <div className="acc-body">
                                <p>{service.detectable}</p>
                            </div>
                        )}

                        {/* BEFORE EXAM (GLOBAL TEXT) */}
                        <button
                            className={`acc-toggle ${openSections.before ? "open" : ""}`}
                            onClick={() => toggleSection("before")}
                        >
                            <h3>Inför undersökningen</h3>
                            <span className="acc-icon">{openSections.before ? "▴" : "▾"}</span>
                        </button>

                        {openSections.before && (
                            <div className="acc-body">
                                <p>
                                    Efter din beställning kommer vi skicka en remiss för din MR-undersökning.
                                    Innan dess får du ett kortare samtal med en remitterande läkare som går
                                    igenom din sjukdomshistoria och dina besvär. Därefter skickas remissen vidare
                                    till röntgenkliniken.
                                </p>
                                <p>
                                    MR är en säker metod som använder magnetfält och radiovågor — helt utan strålning.
                                </p>
                                <ul>
                                    <li>Kläder och föremål med metall tas av före undersökningen.</li>
                                    <li>Informera om pacemaker, implantat eller metall i kroppen.</li>
                                    <li>Meddela om du är gravid eller misstänker graviditet.</li>
                                    <li>Kontrastmedel kan förekomma — du får information i förväg.</li>
                                </ul>
                            </div>
                        )}

                        {/* AFTER EXAM (GLOBAL TEXT) */}
                        <button
                            className={`acc-toggle ${openSections.after ? "open" : ""}`}
                            onClick={() => toggleSection("after")}
                        >
                            <h3>Uppföljning efter undersökningen</h3>
                            <span className="acc-icon">{openSections.after ? "▴" : "▾"}</span>
                        </button>

                        {openSections.after && (
                            <div className="acc-body">
                                <p>
                                    Efter undersökningen granskas bilderna av en specialistläkare i radiologi,
                                    som sammanställer ett detaljerat utlåtande till den remitterande läkaren.
                                </p>
                                <p>
                                    Läkaren återkopplar till dig med resultat, förklaring av fynd och rekommenderad
                                    uppföljning. Om något kräver vidare vård hjälper vi dig vidare.
                                </p>
                            </div>
                        )}

                        {/* LOCATION */}
                        <button
                            className={`acc-toggle ${openSections.location ? "open" : ""}`}
                            onClick={() => toggleSection("location")}
                        >
                            <h3>Var kan jag testa mig?</h3>
                            <span className="acc-icon">{openSections.location ? "▴" : "▾"}</span>
                        </button>

                        {openSections.location && (
                            <div className="acc-body">
                                <p>MR-undersökningar utförs på våra anslutna röntgenkliniker.</p>

                                <Link to="/mottagningar" className="location-btn">
                                    Visa mottagningar →
                                </Link>
                            </div>
                        )}
                    </section>
                </main>
            </div>
        </div>
    );
}
