import { NavigationBlockerContextProvider } from "@components/navigation-blocker";
import { Typography } from "@components/text/typography";
import React from "react";
import { GenericForm } from "./generic-form";

export const NavigationBlockerExample: React.FC = () => {
    return (
        <NavigationBlockerContextProvider>
            <Typography>Edit any field in this form.</Typography>
            <GenericForm />
        </NavigationBlockerContextProvider>
    );
};
