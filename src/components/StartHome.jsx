import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/servicesData";
import { healthTests } from "../data/healthTestsData";

const StartHome = () => {
    const [query, setQuery] = useState("");
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = 500;
        const duration = 1200;
        const stepTime = 20;
        const step = Math.ceil(end / (duration / stepTime));

        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(500);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, []);
    // Detect mobile width
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 700);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const allItems = [
        ...services.map((s) => ({ ...s, type: "mr" })),
        ...healthTests.map((t) => ({ ...t, type: "test" })),
    ];

    const filtered = allItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    const resolvePath = (item) => {
        if (item.type === "mr") return `/magnetrontgen/${item.id}`;
        if (item.type === "test") return `/halsokontroll/${item.id}`;
        return "/";
    };

    const visibleServices = isMobile ? (showAll ? services : services.slice(0, 5)) : services;

    const helkroppService = services.find((s) => s.id === 402); // MR Helkropp Pro

    return (
        <div className="home">
            {/* Search */}
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

                {query && (
                    <div className="search-results">
                        {filtered.length ? (
                            filtered.map((item) => (
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

            {/* Hero Section */}
            <div className="hero-section">
                {/* MR Links Card */}
                <div className="hero-card black-card">
                    <h3 className="mr-title-home">
                        <span>MR-undersökning utan remiss</span>
                        <span className="price">från 3900kr</span>
                    </h3>

                    <div className="mr-links">
                        {Array.from(
                            new Map(
                                visibleServices.map((s) => [s.group.toLowerCase(), s])
                            ).values()
                        )
                            .sort((a, b) =>
                                a.group.localeCompare(b.group, "sv", { sensitivity: "base" })
                            )
                            .map((service) => (
                                <Link
                                    key={service.group}
                                    to={`/magnetrontgen/${service.id}`}
                                    className="mr-link-btn"
                                >
                                    {service.group.charAt(0).toUpperCase() + service.group.slice(1)}
                                </Link>
                            ))}
                    </div>

                    {/* Show all button for mobile only */}
                    {isMobile && services.length > 5 && (
                        <button
                            className="show-all-btn"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "Visa färre ▲" : "Se alla ▾"}
                        </button>
                    )}
                </div>

                {/* MR Helkropp Advertisement */}

                <section className="mr-ad-wrapper">

                    <div className="mr-ad-glass">


                        <div className="trust-number">{count}+</div>
                        <p className="trust-number-text">
                            nöjda patienter bara sista året
                        </p>


                        <div className="trust-list">

                            <div className="trust-item">

                                <p>Support via email – svar inom 24h</p>
                            </div>

                            <div className="trust-item">

                                <p>Röntgenläkare granskar alltid bilderna</p>
                            </div>

                            <div className="trust-item">

                                <p>Vi guidar dig genom hela processen</p>
                            </div>

                            <div className="trust-item">

                                <p>Du får alltid tillgång till dina bilder och utlåtande</p>
                            </div>

                        </div>

                    </div>

                </section>
            </div>
        </div>
    );
};

export default StartHome;