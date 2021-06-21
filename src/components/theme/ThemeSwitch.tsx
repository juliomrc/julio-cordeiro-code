import React, { useContext } from "react";
import { Switch } from "@components/inputs/switch";
import { ThemeContext, AvailableThemes } from "./ThemeContext";
import { FormControlLabel } from "@material-ui/core";

export const ThemeSwitch: React.FC = () => {
    const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        if (selectedTheme !== AvailableThemes.Dark) {
            setSelectedTheme(AvailableThemes.Dark);
            return;
        }
        setSelectedTheme(AvailableThemes.Light);
    };

    return (
        <FormControlLabel
            control={
                <Switch
                    color="primary"
                    checked={selectedTheme === AvailableThemes.Dark}
                    onChange={toggleTheme}
                />
            }
            label={"Dark mode"}
        />
    );
};
