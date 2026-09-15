import React from "react";
import { useParams } from "react-router-dom";

import { services } from "../data/servicesData";

import SEO from "./SEO";
import ProductHero from "./product/ProductHero";
import ProductInfo from "./product/ProductInfo";
import ProductFAQ from "./product/ProductFAQ";
import RelatedArticles from "./product/RelatedArticles";
import RelatedServices from "./product/RelatedServices";

import "../styles/service-product.css";

export default function ServiceProductPage() {
    const { slug } = useParams();

    const service = services.find(
        (service) => service.slug === slug
    );

    if (!service) {
        return (
            <div className="product-not-found">
                <h1>Tjänst hittades inte</h1>
            </div>
        );
    }

    const relatedSideServices = services.filter(
        (item) =>
            item.group === service.group &&
            item.type === service.type
    );

    const canonical =
        service.type === "dexa"
            ? `https://www.rehabscan.se/dexa/${service.slug}`
            : `https://www.rehabscan.se/magnetrontgen/${service.slug}`;

    return (
        <>
            <SEO
                title={
                    service.seoTitle ||
                    `${service.title} | RehabScan`
                }
                description={
                    service.metaDescription ||
                    service.description ||
                    `${service.title} hos RehabScan. Läs mer om undersökningen, pris och bokning.`
                }
                canonical={canonical}
            />

            <div className="product-page">

                <ProductHero
                    service={service}
                    relatedServices={relatedSideServices}
                />

                <ProductInfo service={service} />

                <ProductFAQ service={service} />

                <RelatedArticles
                    articleSlugs={
                        service.relatedArticles || []
                    }
                />

                <RelatedServices
                    currentService={service}
                    serviceSlugs={
                        service.relatedServices || []
                    }
                />

            </div>
        </>
    );
}