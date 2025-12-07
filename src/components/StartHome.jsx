import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/servicesData";
import { healthTests } from "../data/healthTestsData";

const StartHome = () => {
    const [query, setQuery] = useState("");

    // Combine MR services + Test services
    const allItems = [
        ...services.map(s => ({ ...s, type: "mr" })),
        ...healthTests.map(t => ({ ...t, type: "test" }))
    ];

    // Filter by search
    const filtered = allItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    // Return the correct route
    const resolvePath = (item) => {
        if (item.type === "mr") {
            return `/magnetrontgen/${item.id}`;
        }
        if (item.type === "test") {
            return `/halsokontroll/${item.id}`;
        }
        return "/";
    };

    return (
        <div className="home">

            <div className="search-container">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Sök blodprover eller MR-undersökningar"
                        className="search-input"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="search-btn">
                        <img src="/assets/search.svg" alt="Sök" className="cart-icon" />
                    </button>
                </div>

                {/* RESULTS DROPDOWN */}
                {query && (
                    <div className="search-results">
                        {filtered.length ? (
                            filtered.map(item => (
                                <Link
                                    key={item.id + item.type}
                                    to={resolvePath(item)}
                                    className="search-item"
                                    onClick={() => setQuery("")}
                                >
                                    {item.title}
                                </Link>
                            ))
                        ) : (
                            <div className="search-item no-results">Inga träffar</div>
                        )}
                    </div>
                )}
            </div>

            <div className="hero-card discount-card">

                <div className="discount-badge-jul">
                    <Link className="discount-badge-jul-link" to="/halsotester">Hitta din julklapp</Link>
                </div>
            </div>

            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-card black-card">
                    <h3>Magnetröntgen utan remiss</h3>
                    <p>
                        Få tid inom 1–7 arbetsdagar på närmaste kliniken.
                        Se insidan av din kropp – helt strålningsfritt.
                        Billigast i Sverige.
                    </p>

                    <div className="discount-badge">
                        Granskas av röntgenspecialister
                    </div>
                </div> {/* Purple video background card */}
                <div className="hero-card purple-card">
                    <div className="hero-content">
                        <h2 className="title-hero">
                            Klarhet i din hälsa
                        </h2>
                        <p>
                            Lämna blodprov på <a href="./Mottagningar">närmaste klinik</a> i Sverige och få professionell analys av specialistläkare.
                        </p>
                    </div>
                </div>

                {/* Black Weeks card */}

            </div>
        </div>
    );
};

export default StartHome;
