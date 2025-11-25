import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const handler = async (event) => {
    try {
        const { items, email } = JSON.parse(event.body);

        const line_items = items.map((item) => ({
            price_data: {
                currency: "sek",
                product_data: { name: item.name },
                unit_amount: item.price * 100,
            },
            quantity: 1,
        }));

        const session = await stripe.checkout.sessions.create({
            customer_email: email,
            payment_method_types: ["card", "klarna"],
            mode: "payment",
            line_items,
            success_url: `${process.env.URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.URL}/cancel`,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ url: session.url }),
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Unable to create checkout" }),
        };
    }
};
