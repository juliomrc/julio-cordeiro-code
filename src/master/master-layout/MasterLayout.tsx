import React from "react";
import { CssBaseline } from "@material-ui/core";
import { useMasterLayoutStyles } from "./useMasterLayoutStyles";
import { QuickNavigation } from "./quick-navigation";
import { Menu } from "./menu";
import "./master-layout.scss";

export const MasterLayout: React.FC = ({ children }) => {
    const styles = useMasterLayoutStyles();

    return (
        <main className={styles.root}>
            <CssBaseline />
            <QuickNavigation />
            <Menu />
            <div className={styles.websiteContent}>{children}</div>
        </main>
    );
};
