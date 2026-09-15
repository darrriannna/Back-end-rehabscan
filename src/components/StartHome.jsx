import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/servicesData";
import { healthTests } from "../data/healthTestsData";

const StartHome = () => {
    const [query, setQuery] = useState("");
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [count, setCount] = useState(0);

    /* ========================================
       ONLY MR SERVICES
    ======================================== */

    const mrServices = services.filter(
        (service) => service.type === "mr"
    );


    /* ========================================
       600+ COUNTER
    ======================================== */

    useEffect(() => {
        let start = 0;
        const end = 600;
        const duration = 1200;
        const stepTime = 20;
        const step = Math.ceil(end / (duration / stepTime));

        const timer = setInterval(() => {
            start += step;

            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, []);


    /* ========================================
       MOBILE DETECTION
    ======================================== */

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () =>
            window.removeEventListener("resize", handleResize);
    }, []);


    /* ========================================
       SEARCH DATA

       services already contain their correct
       type: "mr" or type: "dexa"

       Health tests get type: "test"
    ======================================== */

    const allItems = [
        ...services,

        ...healthTests.map((test) => ({
            ...test,
            type: "test",
        })),
    ];


    /* ========================================
       SEARCH FILTER
    ======================================== */

    const filtered = allItems.filter((item) =>
        item.title
            .toLowerCase()
            .includes(query.toLowerCase())
    );


    /* ========================================
       RESOLVE PRODUCT URL
    ======================================== */

    const resolvePath = (item) => {
        if (item.type === "mr") {
            return `/magnetrontgen/${item.slug}`;
        }

        if (item.type === "dexa") {
            return `/dexa/${item.slug}`;
        }

        if (item.type === "test") {
            return `/halsokontroll/${item.slug}`;
        }

        return "/";
    };


    /* ========================================
       MR SERVICES SHOWN IN BLACK CARD

       IMPORTANT:
       Only MR services are allowed here.
    ======================================== */

    const visibleServices = isMobile
        ? showAll
            ? mrServices
            : mrServices.slice(0, 5)
        : mrServices;


    return (
        <div className="home">

            {/* ========================================
                SEARCH
            ======================================== */}

            <div className="search-container">

                <div className="search-bar">

                    <input
                        type="text"
                        placeholder="Sök MR, DEXA eller blodprover"
                        className="search-input"
                        value={query}
                        onChange={(e) =>
                            setQuery(e.target.value)
                        }
                    />

                    <button
                        className="search-btn"
                        type="button"
                        aria-label="Sök"
                    >
                        <img
                            src="/assets/search.svg"
                            alt=""
                            className="cart-icon"
                        />
                    </button>

                </div>


                <div className="payment-logos-home">

                    <p>Betala med</p>

                    <span>
                        <img
                            src="/assets/klarna.png"
                            alt="Klarna"
                        />
                    </span>

                    <span>
                        <img
                            src="/assets/master.png"
                            alt="Mastercard"
                        />
                    </span>

                    <span>
                        <img
                            src="/assets/visa.png"
                            alt="Visa"
                        />
                    </span>

                </div>


                {/* SEARCH RESULTS */}

                {query && (
                    <div className="search-results">

                        {filtered.length ? (

                            filtered.map((item) => (

                                <Link
                                    key={`${item.type}-${item.id}`}
                                    to={resolvePath(item)}
                                    className="search-item"
                                    onClick={() =>
                                        setQuery("")
                                    }
                                >
                                    {item.title}
                                </Link>

                            ))

                        ) : (

                            <div className="search-item no-results">
                                Inga träffar
                            </div>

                        )}

                    </div>
                )}

            </div>


            {/* ========================================
                TOP CARDS
            ======================================== */}

            <div className="hero-section">


                {/* ========================================
                    MR CARD
                ======================================== */}

                <div className="hero-card black-card">

                    <div>

                        <h3 className="mr-title-home">

                            MR-undersökning utan remiss

                            <span className="price">
                                {" "}(från 3 990 kr)
                            </span>

                        </h3>


                        <div className="mr-links">

                            {Array.from(
                                new Map(
                                    visibleServices.map(
                                        (service) => [
                                            service.group.toLowerCase(),
                                            service,
                                        ]
                                    )
                                ).values()
                            )
                                .sort((a, b) =>
                                    a.group.localeCompare(
                                        b.group,
                                        "sv",
                                        {
                                            sensitivity: "base",
                                        }
                                    )
                                )
                                .map((service) => (

                                    <Link
                                        key={service.group}
                                        to={`/magnetrontgen/${service.slug}`}
                                        className="mr-link-btn"
                                    >
                                        {service.group
                                            .charAt(0)
                                            .toUpperCase() +
                                            service.group.slice(1)}
                                    </Link>

                                ))}

                        </div>


                        {/* MOBILE SHOW ALL */}

                        {isMobile &&
                            mrServices.length > 5 && (

                                <button
                                    className={`show-all-btn ${showAll
                                            ? "open"
                                            : ""
                                        }`}
                                    onClick={() =>
                                        setShowAll(
                                            (current) =>
                                                !current
                                        )
                                    }
                                    type="button"
                                >
                                    {showAll
                                        ? "Visa färre"
                                        : "Se alla"}

                                    <span>⌄</span>

                                </button>

                            )}

                    </div>

                </div>


                {/* ========================================
                    TRUST CARD
                ======================================== */}

                <section className="home-clinic-card">

                    <div className="home-clinic-topline">
                        <span>
                            {count}+ patienter senaste året
                        </span>
                    </div>


                    <div className="home-clinic-main">

                        <h2>
                            Professionell diagnostik med
                            trygg vägledning
                        </h2>

                        <p>
                            Vi kombinerar medicinsk
                            kompetens, tydlig kommunikation
                            och personlig vägledning genom
                            hela undersökningen.
                        </p>

                    </div>


                    <div className="home-clinic-proof">

                        <div>
                            <strong>
                                Medicinsk granskning
                            </strong>

                            <span>
                                Utförd av röntgenläkare
                            </span>
                        </div>


                        <div>
                            <strong>
                                Tydlig process
                            </strong>

                            <span>
                                Stöd från bokning till svar
                            </span>
                        </div>


                        <div>
                            <strong>
                                Full tillgång
                            </strong>

                            <span>
                                Bilder och utlåtande
                                tillgängliga för dig
                            </span>
                        </div>

                    </div>

                </section>

            </div>


            {/* ========================================
                VIDEO / EXPERTISE BANNER
            ======================================== */}

            <section className="home-video-banner">

                <video
                    className="home-video-background"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                >
                    <source
                        src="/videos/rehabscan-expertise.mp4"
                        type="video/mp4"
                    />
                </video>


                <div className="home-video-overlay" />


                <div className="home-video-content">

                    <span className="home-video-eyebrow">
                        Kunskap. Kvalitet. Trygghet.
                    </span>


                    <h2>
                        Medicinsk kompetens när det
                        verkligen betyder något
                    </h2>


                    <p>
                        Moderna undersökningar,
                        specialistgranskning och tydlig
                        vägledning – med fokus på att du ska
                        känna dig trygg genom hela processen.
                    </p>


                    <Link
                        to="/fakta-och-rad"
                        className="home-video-link"
                    >
                        Utforska Fakta & råd

                        <span>→</span>
                    </Link>

                </div>

            </section>

        </div>
    );
};

export default StartHome;