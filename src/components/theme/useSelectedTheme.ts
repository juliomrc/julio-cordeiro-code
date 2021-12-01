import { useContext } from "react";
import { AvailableThemes, ThemeContext } from "./ThemeContext";
export { AvailableThemes };

export const useSelectedTheme = () => {
    const { selectedTheme } = useContext(ThemeContext);
    return selectedTheme;
};
