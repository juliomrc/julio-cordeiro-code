import React from "react";
import { Typography } from "@components/text/typography";
import { useSectionParagraphStyles } from "./useSectionParagraphStyles";
import classnames from "classnames";

interface SectionParagraphProps {
    className?: string;
}

export const SectionParagraph: React.FC<SectionParagraphProps> = ({
    className,
    children,
}) => {
    const styles = useSectionParagraphStyles();

    return (
        <Typography
            className={classnames(styles.SectionParagraph, className)}
            variant="body1"
        >
            {children}
        </Typography>
    );
};
