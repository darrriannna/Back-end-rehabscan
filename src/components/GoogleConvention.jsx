import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GoogleAdsConversion() {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const sessionId = params.get("session_id");

        if (
            location.pathname === "/success" &&
            sessionId &&
            window.gtag
        ) {
            const firedKey = `ads_conversion_${sessionId}`;
            if (sessionStorage.getItem(firedKey)) return;

            window.gtag("event", "conversion", {
                send_to: "AW-16866588289/GT-55XZMD8K",
                transaction_id: sessionId,
            });

            sessionStorage.setItem(firedKey, "true");
        }
    }, [location]);

    return null;
}
