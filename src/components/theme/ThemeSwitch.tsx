import React, { useContext } from "react";
import { Switch } from "@components/inputs/switch";
import { ThemeContext, AvailableThemes } from "./ThemeContext";
import { Typography } from "@components/typography";
import { useThemeSwitchStyles } from "./useThemeSwitchStyles";

export const ThemeSwitch: React.FC = () => {
    const { selectedTheme, setSelectedTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        if (selectedTheme !== AvailableThemes.Dark) {
            setSelectedTheme(AvailableThemes.Dark);
            return;
        }
        setSelectedTheme(AvailableThemes.Light);
    };

    const styles = useThemeSwitchStyles();

    return (
        <Typography>
            <label className={styles.themeSwitch}>
                Light mode
                <Switch
                    checked={selectedTheme === AvailableThemes.Dark}
                    onChange={toggleTheme}
                />
                Dark mode
            </label>
        </Typography>
    );
};
