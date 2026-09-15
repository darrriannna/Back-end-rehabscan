import { Link } from "react-router-dom";

export default function ProductInfo({ service }) {
    return (
        <section className="product-info-section">

            {service.description && (
                <div className="product-introduction">
                    <p>{service.description}</p>
                </div>
            )}

            <div className="product-info-grid">

                {service.whenRecommended && (
                    <article className="product-info-block">
                        <span className="section-label">
                            När passar undersökningen?
                        </span>

                        <h2>
                            När rekommenderas {service.title}?
                        </h2>

                        <p>{service.whenRecommended}</p>
                    </article>
                )}

                {service.detectable && (
                    <article className="product-info-block">
                        <span className="section-label">
                            Vad undersökningen kan visa
                        </span>

                        <h2>
                            Vad kan undersökningen upptäcka?
                        </h2>

                        <p>{service.detectable}</p>
                    </article>
                )}

                <article className="product-info-block">
                    <span className="section-label">
                        Så fungerar det
                    </span>

                    <h2>Så går undersökningen till</h2>

                    {service.examination ? (
                        <p>{service.examination}</p>
                    ) : service.type === "mr" ? (
                        <p>
                            Efter din beställning görs en medicinsk bedömning
                            inför remissen. När remissen är färdig skickas den
                            vidare till en ansluten röntgenklinik där
                            magnetkameraundersökningen genomförs.
                        </p>
                    ) : (
                        <p>
                            Efter bokningen får du information om hur
                            undersökningen går till och eventuella
                            förberedelser inför ditt besök.
                        </p>
                    )}
                </article>

                <article className="product-info-block">
                    <span className="section-label">
                        Förberedelser
                    </span>

                    <h2>Inför undersökningen</h2>

                    {service.preparation ? (
                        <p>{service.preparation}</p>
                    ) : service.type === "mr" ? (
                        <>
                            <p>
                                MR använder magnetfält och radiovågor och
                                innebär ingen joniserande strålning.
                            </p>

                            <ul>
                                <li>
                                    Metallföremål tas av före undersökningen.
                                </li>
                                <li>
                                    Informera kliniken om pacemaker, implantat
                                    eller metall i kroppen.
                                </li>
                                <li>
                                    Informera kliniken om du är gravid eller
                                    misstänker graviditet.
                                </li>
                                <li>
                                    Om kontrastmedel behövs får du information
                                    om detta inför undersökningen.
                                </li>
                            </ul>
                        </>
                    ) : (
                        <p>
                            Eventuella förberedelser beror på vilken
                            undersökning du har bokat. Du får relevant
                            information inför besöket.
                        </p>
                    )}
                </article>

                <article className="product-info-block">
                    <span className="section-label">
                        Resultat
                    </span>

                    <h2>Efter undersökningen</h2>

                    {service.afterExam ? (
                        <p>{service.afterExam}</p>
                    ) : service.type === "mr" ? (
                        <p>
                            Bilderna granskas av en specialistläkare i
                            radiologi. Ett medicinskt utlåtande sammanställs
                            och resultatet återkopplas enligt den process som
                            gäller för din undersökning.
                        </p>
                    ) : (
                        <p>
                            Efter undersökningen får du information om
                            resultatet och eventuell rekommenderad
                            uppföljning.
                        </p>
                    )}
                </article>

                <article className="product-info-block product-location-block">
                    <span className="section-label">
                        Mottagningar
                    </span>

                    <h2>Var utförs undersökningen?</h2>

                    <p>
                        Undersökningen utförs hos någon av våra anslutna
                        mottagningar.
                    </p>

                    <Link
                        to="/mottagningar"
                        className="location-btn"
                    >
                        Visa mottagningar →
                    </Link>
                </article>
                <article className="product-info-block product-location-block">
                    <span className="section-label">
                        Mottagningar
                    </span>

                    <h2>Var kan jag göra undersökningen?</h2>

                    {service.clinics?.length > 0 ? (
                        <>
                            <p className="clinic-intro">
                                Undersökningen erbjuds på följande mottagningar:
                            </p>

                            <div className="product-clinic-list">
                                {service.clinics.map((clinic) => (
                                    <div
                                        className="product-clinic"
                                        key={`${clinic.name}-${clinic.address}`}
                                    >
                                        <div className="product-clinic-main">
                                            <h3>{clinic.name}</h3>

                                            <p>
                                                {clinic.address}
                                                {clinic.city && `, ${clinic.city}`}
                                            </p>
                                        </div>

                                        {clinic.booking && (
                                            <span className="clinic-booking-type">
                                                {clinic.booking}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <Link
                                to="/mottagningar"
                                className="location-btn"
                            >
                                Läs mer om våra mottagningar →
                            </Link>
                        </>
                    ) : (
                        <>
                            <p>
                                Undersökningen utförs hos någon av våra
                                anslutna mottagningar.
                            </p>

                            <Link
                                to="/mottagningar"
                                className="location-btn"
                            >
                                Visa mottagningar →
                            </Link>
                        </>
                    )}
                </article>
            </div>
        </section>
    );
}