import React from "react";
import { Typography } from "../typography";
import { usePageHeaderStyles } from "./usePageHeaderStyles";

export const PageHeader: React.FC = ({ children }) => {
    const styles = usePageHeaderStyles();

    return (
        <Typography className={styles.pageHeader} variant="h2">
            <b>{children}</b>
        </Typography>
    );
};
