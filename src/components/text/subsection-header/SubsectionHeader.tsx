import { Typography } from "@components/text/typography";
import React from "react";
import { useSubsectionHeaderStyles } from "./useSubsectionHeaderStyles";

export const SubsectionHeader: React.FC = ({ children }) => {
    const styles = useSubsectionHeaderStyles();

    return (
        <Typography className={styles.subsectionHeader} variant="h4">
            {children}
        </Typography>
    );
};
