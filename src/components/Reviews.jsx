import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "../styles/reviews.css";

const reviews = [
    {
        name: "Rasmus Fagerlund Ploby",
        rating: 5,
        date: "2 veckor sedan",
        text: "Allt gick smidigt. Fick hjälp snabbt av trevlig personal som verkligen kunde sitt jobb. Kändes bra redan efter besöket 👍",
    },
    {
        name: "Albin",
        rating: 5,
        date: "10 månader sedan",
        text: "Väldigt bra hjälp! Fick tid så snabbt efter jag ringt upp och vi talat vid telefon. Rekommenderar!",
    },
    {
        name: "mi ca",
        rating: 5,
        date: "10 månader sedan",
        text: "Toppenbra bemötande och snabb hjälp! Rekommenderas starkt!",
    },
    {
        name: "Benjamin Sandberg",
        rating: 5,
        date: "10 månader sedan",
        text: "Professionellt och trevligt bemötande som ger snabb hjälp efter kontakt! Rekommenderas starkt!",
    },
    {
        name: "Isac Vermelin DRe",
        rating: 5,
        date: "9 månader sedan",
        text: "Trevligt, kunnigt och engagerat bemötande. Mycket snabb hjälp. Rekommenderas.",
    },
    {
        name: "Hampus Liberg",
        rating: 5,
        date: "10 månader sedan",
        text: "Fick tid redan dag 3, snabb hjälp. Gjorde min MR i Göteborg.",
    },
    {
        name: "von gallerix",
        rating: 5,
        date: "10 månader sedan",
        text: "Snabb hjälp, fick tid redan efter 2 dagar.",
    },
    {
        name: "Vic FortheW",
        rating: 5,
        date: "8 månader sedan",
        text: "Kanon ställe! Fick tid dagen efter, rekommenderar starkt!",
    },
];

const getInitials = (name) =>
    name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

const GoogleReviewCard = ({ review }) => (
    <div className="review-card">
        <div className="review-top">
            <div className="avatar-circle">
                <span className="avatar-initials">{getInitials(review.name)}</span>
            </div>

            <div className="review-info">
                <p className="review-name">{review.name}</p>
                <p className="review-date">{review.date}</p>
            </div>
        </div>

        <p className="review-text">{review.text}</p>

        <div className="review-bottom">
            <div className="stars">{"★".repeat(review.rating)}</div>
            <span className="google-text">Google recensioner</span>
        </div>
    </div>
);

const GoogleReviews = () => {
    return (
        <div className="reviews-section">
            <div className="google-reviews-section">
                <h2 className="heading">Vad våra patienter säger</h2>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {reviews.map((r, i) => (
                        <SwiperSlide key={i}>
                            <GoogleReviewCard review={r} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default GoogleReviews;