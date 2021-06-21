import React from "react";
import { useAnimateAndRemovePreloader } from "./useAnimateAndRemovePreloader";
import { GlobalProviders } from "./global-providers";
import { MasterLayout } from "./master-layout";
import { Router } from "./routing";

export const Master: React.FC = () => {
    useAnimateAndRemovePreloader();

    return (
        <GlobalProviders>
            <MasterLayout>
                <Router />
            </MasterLayout>
        </GlobalProviders>
    );
};
