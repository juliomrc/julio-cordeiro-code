import {
    useSelectedTheme,
    AvailableThemes,
} from "@components/theme/useSelectedTheme";

import atomDark from "react-syntax-highlighter/dist/esm/styles/prism/atom-dark";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";

export const useGetCodeSyntaxHighlighterTheme = () => {
    const theme = useSelectedTheme();

    return theme === AvailableThemes.Dark ? atomDark : prism;
};
