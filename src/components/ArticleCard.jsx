import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
    return (
        <article className="article-card">

            <Link
                to={`/fakta-och-rad/${article.slug}`}
                className="article-card-image-link"
            >
                <div className="article-card-image">
                    <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                    />
                </div>
            </Link>

            <div className="article-card-content">

                <div className="article-card-meta">
                    <span className="article-category">
                        {article.category}
                    </span>

                    <span className="article-reading-time">
                        {article.readingTime}
                    </span>
                </div>

                <h2 className="article-card-title">
                    <Link to={`/fakta-och-rad/${article.slug}`}>
                        {article.title}
                    </Link>
                </h2>

                <p className="article-card-excerpt">
                    {article.excerpt}
                </p>

                <Link
                    to={`/fakta-och-rad/${article.slug}`}
                    className="article-read-more"
                >
                    Läs artikeln →
                </Link>

            </div>

        </article>
    );
}