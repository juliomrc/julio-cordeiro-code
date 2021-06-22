import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeSwitch } from "@components/theme/ThemeSwitch";
import { useMasterLayoutStyles } from "./useMasterLayoutStyles";
import { BottomNavigation } from "./bottom-navigation";
import "./master-layout.scss";

export const MasterLayout: React.FC = ({ children }) => {
    const styles = useMasterLayoutStyles();

    return (
        <main className={styles.root}>
            <CssBaseline />
            <ThemeSwitch />
            <div className={styles.websiteContent}>{children}</div>
            <BottomNavigation className={styles.bottomNavigation} />
        </main>
    );
};
