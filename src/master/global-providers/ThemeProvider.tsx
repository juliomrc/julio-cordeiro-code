import React, { useState } from "react";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core";
import {
    AvailableThemes,
    buildTheme,
    ThemeContext,
} from "@components/theme/ThemeContext";

export const ThemeProvider: React.FC = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState<AvailableThemes>(
        getUserPreferredDefaultTheme(),
    );

    return (
        <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
            <MaterialThemeProvider theme={buildTheme(selectedTheme)}>
                {children}
            </MaterialThemeProvider>
        </ThemeContext.Provider>
    );
};

const getUserPreferredDefaultTheme = () => {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return AvailableThemes.Dark;
    }
    return AvailableThemes.Light;
};
