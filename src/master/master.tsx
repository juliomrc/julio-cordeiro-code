import React from "react";
import { Router } from "./routing/Router";
import { useAnimateAndRemovePreloader } from "./useAnimateAndRemovePreloader";
import styles from "./master.scss";

export const Master: React.FC = () => {
    useAnimateAndRemovePreloader();

    return (
        <div className={styles.master}>
            <Router />
        </div>
    );
};
