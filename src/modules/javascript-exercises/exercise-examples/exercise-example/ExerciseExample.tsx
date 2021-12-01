import React from "react";
import { CodeSyntaxHighlighter } from "@components/code-syntax-highlighter";
import { ExpandableCardWithHeader } from "@components/expandable-card-with-header";

interface ExerciseExampleProps {
    header: string;
    children: string;
}

export const ExerciseExample: React.FC<ExerciseExampleProps> = ({
    header,
    children,
}) => {
    return (
        <ExpandableCardWithHeader header={header}>
            <CodeSyntaxHighlighter>{children}</CodeSyntaxHighlighter>
        </ExpandableCardWithHeader>
    );
};
