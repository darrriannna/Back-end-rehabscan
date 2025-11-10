import Stripe from "stripe";

// Use your Stripe secret key from .env
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const handler = async (event) => {
    try {
        const { items } = JSON.parse(event.body);

        if (!items || items.length === 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Cart is empty" }),
            };
        }

        // Build line items for Stripe
        const line_items = items.map((item) => ({
            price_data: {
                currency: "sek", // Swedish krona
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100, // Stripe expects price in cents
            },
            quantity: 1, // or item.quantity if you add a quantity field
        }));

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: `${process.env.URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.URL}/cancel`,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ url: session.url }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to create checkout session" }),
        };
    }
};


