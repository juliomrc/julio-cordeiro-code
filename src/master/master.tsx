import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalProviders } from "./global-providers";
import { MasterLayout } from "./master-layout";
import { Routing } from "./routing";

export const Master: React.FC = () => {
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
