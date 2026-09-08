import React from "react";
import { Link, useParams } from "react-router-dom";

import SEO from "../components/SEO";
import { articles } from "../data/articlesData";
import { services } from "../data/servicesData";

import "../styles/facts-advice.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ArticlePage() {

    const { slug } = useParams();

    const article = articles.find(
        article => article.slug === slug
    );

    if (!article) {
        return <h2>Artikeln hittades inte</h2>;
    }


    const relatedServices = services.filter(service =>
        article.relatedServiceSlugs?.includes(service.slug)
    );


    return (
        <>
            <SEO
                title={article.seoTitle}
                description={article.metaDescription}
                canonical={`https://www.rehabscan.se/fakta-och-rad/${article.slug}`}
            />
            <Navbar />

            <main className="article-page">

                <div className="article-container">

                    {/* BREADCRUMBS */}

                    <nav className="article-breadcrumbs">
                        <Link to="/">Hem</Link>

                        <span>›</span>

                        <Link to="/fakta-och-rad">
                            Fakta & råd
                        </Link>

                        <span>›</span>

                        <span>{article.title}</span>
                    </nav>


                    {/* ARTICLE HEADER */}

                    <header className="article-header">

                        <span className="article-category">
                            {article.category}
                        </span>

                        <h1>{article.title}</h1>

                        <p className="article-lead">
                            {article.excerpt}
                        </p>

                        <div className="article-info">

                            <span>
                                {article.readingTime}
                            </span>

                            <span>•</span>

                            <span>
                                Uppdaterad{" "}
                                {new Date(
                                    article.updatedAt
                                ).toLocaleDateString("sv-SE")}
                            </span>

                        </div>

                    </header>


                    {/* HERO IMAGE */}

                    {article.image && (
                        <div className="article-hero-image">
                            <img
                                src={article.image}
                                alt={article.title}
                            />
                        </div>
                    )}


                    {/* CONTENT */}

                    <div className="article-layout">

                        <article className="article-content">

                            <p className="article-intro">
                                {article.intro}
                            </p>


                            {article.sections.map((section, index) => (
                                <section
                                    key={index}
                                    className="article-section"
                                >

                                    <h2>{section.heading}</h2>


                                    {section.paragraphs?.map(
                                        (paragraph, paragraphIndex) => (
                                            <p key={paragraphIndex}>
                                                {paragraph}
                                            </p>
                                        )
                                    )}


                                    {section.bullets && (
                                        <ul>
                                            {section.bullets.map(
                                                (bullet, bulletIndex) => (
                                                    <li key={bulletIndex}>
                                                        {bullet}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}

                                </section>
                            ))}


                            {/* MEDICAL REVIEW */}

                            <aside className="medical-review-card">

                                <div>
                                    <span className="review-label">
                                        Medicinskt granskad av
                                    </span>

                                    <strong>
                                        {article.reviewer.name}
                                    </strong>

                                    <p>
                                        {article.reviewer.role}
                                    </p>
                                </div>

                            </aside>


                            {/* RELATED SERVICES */}

                            {relatedServices.length > 0 && (

                                <section className="article-services">

                                    <span className="facts-small-title">
                                        Relaterade undersökningar
                                    </span>

                                    <h2>
                                        Undersökningar hos RehabScan
                                    </h2>

                                    <div className="article-service-grid">

                                        {relatedServices.map(service => (

                                            <Link
                                                key={service.id}
                                                to={`/magnetrontgen/${service.slug}`}
                                                className="article-service-card"
                                            >

                                                <div>
                                                    <strong>
                                                        {service.title}
                                                    </strong>

                                                    <span>
                                                        {service.price.toLocaleString(
                                                            "sv-SE"
                                                        )}{" "}
                                                        kr
                                                    </span>
                                                </div>

                                                <span className="service-arrow">
                                                    →
                                                </span>

                                            </Link>

                                        ))}

                                    </div>

                                </section>

                            )}

                        </article>

                    </div>

                </div>

            </main>
            <Footer />
        </>
    );
}