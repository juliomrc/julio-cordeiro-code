import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeSwitch } from "@components/theme/ThemeSwitch";
import { useMasterLayoutStyles } from "./useMasterLayoutStyles";
import "./master-layout.scss";

export const MasterLayout: React.FC = ({ children }) => {
    const styles = useMasterLayoutStyles();

    return (
        <>
            <ThemeSwitch />
            <CssBaseline />
            <main className={styles.masterLayout}>{children}</main>
        </>
    );
};
