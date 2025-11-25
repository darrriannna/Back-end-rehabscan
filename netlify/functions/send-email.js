

export const handler = async (event) => {
    try {
        const data = JSON.parse(event.body);

        // Send to EmailJS
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                service_id: process.env.EMAILJS_SERVICE_ID,
                template_id: process.env.EMAILJS_TEMPLATE_ID,
                user_id: process.env.EMAILJS_PUBLIC_KEY,
                accessToken: process.env.EMAILJS_PRIVATE_KEY, // secure!
                template_params: data,
            }),
        });

        if (!response.ok) {
            throw new Error("EmailJS failed");
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true }),
        };

    } catch (error) {
        console.error("Email send error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Email sending failed" }),
        };
    }
};
