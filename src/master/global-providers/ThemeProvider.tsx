import React, { useState } from "react";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core";
import {
    AvailableThemes,
    buildTheme,
    ThemeContext,
} from "@components/theme/ThemeContext";

export const ThemeProvider: React.FC = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState<AvailableThemes>(
        AvailableThemes.Dark,
    );

    return (
        <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
            <MaterialThemeProvider theme={buildTheme(selectedTheme)}>
                {children}
            </MaterialThemeProvider>
        </ThemeContext.Provider>
    );
};
