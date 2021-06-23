import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { PreloaderContextProvider } from "@components/preloader-context";

export const GlobalProviders: React.FC = ({ children }) => {
    return (
        <ThemeProvider>
            <PreloaderContextProvider>{children}</PreloaderContextProvider>
        </ThemeProvider>
    );
};
