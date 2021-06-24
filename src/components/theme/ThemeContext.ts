import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

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
    const paletteOptions: PaletteOptions = {};
    if (selectedTheme === AvailableThemes.Light) {
        paletteOptions.type = "light";
        paletteOptions.background = {
            paper: "#dce5f2",
        };
    } else {
        paletteOptions.type = "dark";
    }

    const defaultTheme = createMuiTheme({
        palette: paletteOptions,
    });

    return defaultTheme;
};
