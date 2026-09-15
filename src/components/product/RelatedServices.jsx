import { Link } from "react-router-dom";
import { services } from "../../data/servicesData";

export default function RelatedServices({
    currentService,
    serviceSlugs = [],
}) {
    let relatedServices = [];

    if (serviceSlugs.length) {
        relatedServices = serviceSlugs
            .map((slug) =>
                services.find((service) => service.slug === slug)
            )
            .filter(Boolean);
    } else {
        relatedServices = services
            .filter(
                (service) =>
                    service.group === currentService.group &&
                    service.id !== currentService.id
            )
            .slice(0, 4);
    }

    if (!relatedServices.length) {
        return null;
    }

    const getServiceUrl = (service) => {
        if (service.type === "dexa") {
            return `/dexa/${service.slug}`;
        }

        return `/magnetrontgen/${service.slug}`;
    };

    return (
        <section className="related-services-section">

            <div className="section-heading">
                <span className="section-label">
                    Fler undersökningar
                </span>

                <h2>Relaterade undersökningar</h2>
            </div>

            <div className="related-services-carousel">
                {relatedServices.map((service) => (
                    <Link
                        to={getServiceUrl(service)}
                        className="related-service-card"
                        key={service.id}
                    >
                        {service.image && (
                            <div className="related-service-image">
                                <img
                                    src={service.image}
                                    alt=""
                                    loading="lazy"
                                />
                            </div>
                        )}

                        <div className="related-service-content">
                            <h3>{service.title}</h3>

                            {service.subtitle && (
                                <p>{service.subtitle}</p>
                            )}

                            <div className="related-service-bottom">
                                <strong>
                                    {service.price} kr
                                </strong>

                                <span>
                                    Läs mer →
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </section>
    );
}