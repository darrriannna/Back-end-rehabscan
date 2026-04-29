import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/servicesData";
import { healthTests } from "../data/healthTestsData";
import BodyMap from "./BodyMap";


const StartHome = () => {
    console.log("IMPORTED SERVICES:", services);
    const [query, setQuery] = useState("");
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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
                        MR-undersökning utan remiss
                        <span className="price"> (från 3900kr)</span>
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
                <div className="hero-card">
                    <BodyMap services={services} />
                </div>
            </div>
        </div>
    );
};

export default StartHome;