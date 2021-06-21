import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";

interface ThemeContext {
    setSelectedTheme: (selectedTheme: AvailableThemes) => void;
    selectedTheme: AvailableThemes;
}

export enum AvailableThemes {
    Dark,
    Light,
}

export const ThemeContext = React.createContext<ThemeContext>({
    selectedTheme: AvailableThemes.Dark,
    setSelectedTheme: () => null,
});

export const buildTheme = (selectedTheme: AvailableThemes) => {
    const defaultTheme = createMuiTheme({
        palette: {
            type: selectedTheme === AvailableThemes.Light ? "light" : "dark",
        },
    });

    return defaultTheme;
};
