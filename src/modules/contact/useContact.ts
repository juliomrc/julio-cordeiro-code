import { ContactForm, contactFormValidator } from "./contact-form-helpers";
import { useFormManager } from "@components/form-management/use-form-manager";
import { useAPIRequestStateHandler } from "@components/api-request-sate-handler/use-api-request-state-handler";
import { useState } from "react";

export const useContact = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    const { requestState, standardAPIRequestWrap } =
        useAPIRequestStateHandler();

    const sendEmail = standardAPIRequestWrap(async (formState: ContactForm) => {
        await fetch("/.netlify/functions/contact", {
            method: "POST",
            body: JSON.stringify(formState),
        });
        setShowSuccess(true);
    });

    const formManager = useFormManager<ContactForm>({
        onSubmit: sendEmail,
        validators: contactFormValidator,
    });

    const handleCloseAlert = () => {
        setShowSuccess(false);
        formManager.resetFormWithNewState({});
    };

    return {
        requestState,
        formManager,
        showSuccess,
        handleCloseAlert,
    };
};
