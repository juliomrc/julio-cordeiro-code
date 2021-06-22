import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useAnimateAndRemovePreloader } from "./useAnimateAndRemovePreloader";
import { GlobalProviders } from "./global-providers";
import { MasterLayout } from "./master-layout";
import { Routing } from "./routing";

export const Master: React.FC = () => {
    useAnimateAndRemovePreloader();

    return (
        <BrowserRouter>
            <GlobalProviders>
                <MasterLayout>
                    <Routing />
                </MasterLayout>
            </GlobalProviders>
        </BrowserRouter>
    );
};
