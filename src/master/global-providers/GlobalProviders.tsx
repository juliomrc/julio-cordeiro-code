import React from "react";
import { ThemeProvider } from "./ThemeProvider";

export const GlobalProviders: React.FC = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};
