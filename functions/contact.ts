import { Handler } from "@netlify/functions";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

// TODO: This being my "server API", I can export this type and the path to this function
// and use them as the parameters to the fetch
interface SendEmailAPI {
    email: string;
    name: string;
    subject: string;
    body: string;
}

export const handler: Handler = async (event) => {
    const { email, name, body, subject }: SendEmailAPI = JSON.parse(
        event.body ?? "",
    );

    if (!email || !name || !body || !subject) {
        return {
            statusCode: 400,
            body: JSON.stringify("Please fill all the form fields."),
        };
    }

    try {
        await sgMail.send({
            to: process.env.ADMIN_EMAIL as string,
            from: process.env.ADMIN_EMAIL as string,
            replyTo: { email, name },
            subject: `Portfolio Contact form - ${subject}`,
            text: `${body} \n from ${name}, ${email}`,
            html: `<div><p>${body}</p> <p>From ${name}, ${email}</p></div>`,
        });
        return {
            statusCode: 200,
        };
    } catch {
        return {
            statusCode: 500,
        };
    }
};
