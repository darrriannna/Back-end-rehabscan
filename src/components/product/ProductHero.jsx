import { FiShoppingCart, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function ProductHero({ service, relatedServices = [] }) {
    const navigate = useNavigate();
    const { addToCart, removeFromCart, cart } = useCart();

    const isInCart = cart.some((item) => item.id === service.id);

    const code = service.title
        .replace("MR ", "")
        .slice(0, 3)
        .toUpperCase();

    const handleServiceChange = (newService) => {
        if (newService.type === "mr") {
            navigate(`/magnetrontgen/${newService.slug}`);
        } else if (newService.type === "dexa") {
            navigate(`/dexa/${newService.slug}`);
        }
    };

    const handleCart = () => {
        if (isInCart) {
            removeFromCart(service.id);
            return;
        }

        addToCart({
            id: service.id,
            name: service.title,
            price: service.price,
            type: service.type,
            image: service.image,
        });
    };

    return (
        <section className="product-hero">
            <div className="product-hero-inner">

                <div className="product-media">
                    <div className="media-block">
                        {service.image?.includes("placeholder-service.png") ? (
                            <div className="mr-im-top">
                                <div className="mr-im-code">{code}</div>
                            </div>
                        ) : service.image ? (
                            <img
                                src={service.image}
                                alt={service.title}
                                className="product-image"
                            />
                        ) : (
                            <div className="mr-im-top">
                                <div className="mr-im-code">{code}</div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="product-content">

                    {relatedServices.length > 1 && (
                        <div className="side-toggle">
                            {relatedServices.map((related) => (
                                <button
                                    key={related.id}
                                    type="button"
                                    className={`side-btn ${related.id === service.id ? "active" : ""
                                        }`}
                                    onClick={() => handleServiceChange(related)}
                                >
                                    {related.title.includes("Vänster")
                                        ? "Vänster"
                                        : related.title.includes("Höger")
                                            ? "Höger"
                                            : related.title}
                                </button>
                            ))}
                        </div>
                    )}

                    <h1 className="product-title">{service.title}</h1>

                    {service.subtitle && (
                        <p className="product-sub">
                            {service.subtitle}
                        </p>
                    )}

                    <div className="price-row">
                        {service.oldPrice && (
                            <span className="price-old">
                                {service.oldPrice} kr
                            </span>
                        )}

                        <span className="price-new">
                            {service.price} kr
                        </span>
                    </div>

                    {service.includes?.length > 0 && (
                        <ul className="feature-list">
                            {service.includes.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}

                    <div className="action-row">
                        <button
                            type="button"
                            className="cart-btn"
                            onClick={handleCart}
                        >
                            {isInCart ? (
                                <>
                                    <FiX size={20} />
                                    <span>Ta bort från varukorg</span>
                                </>
                            ) : (
                                <>
                                    <FiShoppingCart size={20} />
                                    <span>Lägg i varukorg</span>
                                </>
                            )}
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}