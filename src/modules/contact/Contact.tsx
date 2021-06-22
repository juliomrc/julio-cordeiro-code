import React from "react";
import { useFormManager } from "react-simple-form-manager";
import { Typography } from "@components/text/typography";
import { PageHeader } from "@components/text/page-header";

export const Contact: React.FC = () => {
    const formManager = useFormManager({
        onSubmit: (formState) => console.log(formState),
    });

    return (
        <>
            <PageHeader>Contact</PageHeader>
            <form onSubmit={formManager.handleSubmit}>
                <Typography>Let's get in touch.</Typography>
            </form>
        </>
    );
};

export default Contact;
