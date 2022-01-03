import { FormValidators } from "react-simple-form-manager";

export interface ContactForm {
    email: string;
    name: string;
    subject: string;
    body: string;
}

// http://emailregex.com/
// eslint-disable-next-line
const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const contactFormValidator: FormValidators<ContactForm> = {
    email: (email: string) => !email || !email.match(emailRegex),
    name: (name: string) => !name,
    subject: (subject: string) => !subject || subject.length < 2,
    body: (body: string) => !body || body.length < 10,
};
