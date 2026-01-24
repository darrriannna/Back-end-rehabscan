import React from 'react';
import Slider from 'react-slick';
import "../styles/reviews.css";

const reviews = [
    {
        name: "Rasmus Fagerlund Ploby",
        rating: 5,
        date: "2 veckor sedan",
        text: " Allt gick smidigt. Fick hjälp snabbt av trevlig personal som verkligen kunde sitt jobb. Kändes bra redan efter besöket 👍 …",
    },
    {
        name: "Albin",
        rating: 5,
        date: "10 månader sedan",
        text: "Väldigt bra hjälp! Fick tid så snabbt efter jag ringt upp och vi talat vid telefon. Rekommenderar! ",
    },
    {
        name: "mi ca",
        rating: 5,
        date: "10 månader sedan",
        text: "Toppenbra bemötande och snabb hjälp! Rekommenderas starkt! :) ",
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
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,       // default for large screens (laptop/desktop)
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,  // tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 768,   // small tablets / large phones
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,   // mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };



    return (
        <div className="reviews-section">
            <div className="google-reviews-section">
                <h2 className="heading">Vad våra patienter säger</h2>


                <Slider {...settings}>
                    {reviews.map((r, i) => (
                        <GoogleReviewCard key={i} review={r} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default GoogleReviews;