import React from "react";
import { Typography } from "@components/text/typography";
import { useSectionParagraphStyles } from "./useSectionParagraphStyles";

export const SectionParagraph: React.FC = ({ children }) => {
    const styles = useSectionParagraphStyles();

    return (
        <Typography className={styles.SectionParagraph} variant="body1">
            {children}
        </Typography>
    );
};
