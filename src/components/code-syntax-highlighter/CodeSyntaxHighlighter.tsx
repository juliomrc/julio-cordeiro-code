import React from "react";
import { PrismAsyncLight } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import { useGetCodeSyntaxHighlighterTheme } from "./useGetCondeSyntaxHighlighterTheme";

PrismAsyncLight.registerLanguage("tsx", tsx);

interface CodeSyntaxHighlighterProps {
    children: string;
}

export const CodeSyntaxHighlighter: React.FC<CodeSyntaxHighlighterProps> = ({
    children,
}) => {
    const theme = useGetCodeSyntaxHighlighterTheme();
    return (
        <PrismAsyncLight style={theme} showLineNumbers={true} language="tsx">
            {children}
        </PrismAsyncLight>
    );
};
