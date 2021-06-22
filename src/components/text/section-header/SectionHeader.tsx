import { Typography } from "@components/text/typography";
import React from "react";
import { useSectionHeaderStyles } from "./useSectionHeaderStyles";

export const SectionHeader: React.FC = ({ children }) => {
    const styles = useSectionHeaderStyles();

    return (
        <Typography className={styles.sectionHeader} variant="h3">
            {children}
        </Typography>
    );
};
