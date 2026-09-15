import { Link } from "react-router-dom";
import { articles } from "../../data/articlesData";

export default function RelatedArticles({ articleSlugs = [] }) {
    if (!articleSlugs.length) {
        return null;
    }

    const relatedArticles = articleSlugs
        .map((slug) =>
            articles.find((article) => article.slug === slug)
        )
        .filter(Boolean);

    if (!relatedArticles.length) {
        return null;
    }

    return (
        <section className="related-articles-section">

            <div className="section-heading">
                <span className="section-label">
                    Kunskap & råd
                </span>

                <h2>Läs mer</h2>

                <p>
                    Läs våra artiklar om undersökningen,
                    vanliga besvär och relaterade tillstånd.
                </p>
            </div>

            <div className="article-carousel">
                {relatedArticles.map((article) => (
                    <article
                        className="article-card"
                        key={article.slug}
                    >
                        <Link
                            to={`/artiklar/${article.slug}`}
                            className="article-card-link"
                        >
                            {article.image && (
                                <div className="article-card-image">
                                    <img
                                        src={article.image}
                                        alt=""
                                        loading="lazy"
                                    />
                                </div>
                            )}

                            <div className="article-card-content">
                                {article.category && (
                                    <span className="article-category">
                                        {article.category}
                                    </span>
                                )}

                                <h3>{article.title}</h3>

                                {article.excerpt && (
                                    <p>{article.excerpt}</p>
                                )}

                                <span className="article-read-more">
                                    Läs mer →
                                </span>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>

        </section>
    );
}