import React from "react";
import { CodeSyntaxHighlighter } from "@components/code-syntax-highlighter";
import { ExpandableCardWithHeader } from "@components/expandable-card-with-header";
import { Typography } from "@components/text/typography";

interface SimpleExerciseExampleProps {
    header: string;
    exerciseFiles: ExerciseFiles[];
}

interface ExerciseFiles {
    name: string;
    content: string;
}

export const SimpleExerciseExample: React.FC<SimpleExerciseExampleProps> = ({
    header,
    exerciseFiles,
}) => {
    return (
        <ExpandableCardWithHeader header={header}>
            {exerciseFiles.map((file) => (
                <>
                    <Typography color="textSecondary">{file.name}</Typography>
                    <CodeSyntaxHighlighter>
                        {file.content}
                    </CodeSyntaxHighlighter>
                </>
            ))}
        </ExpandableCardWithHeader>
    );
};
