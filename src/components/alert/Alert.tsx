import { CrossButton } from "@components/inputs/cross-button";
import React from "react";
import { useAlertStyles } from "./useAlertStyles";

interface AlertProps {
    onClose: () => void;
}

export const Alert: React.FC<AlertProps> = ({ onClose, children }) => {
    const styles = useAlertStyles();

    return (
        <div className={styles.alert}>
            <CrossButton onClick={onClose} className={styles.closeIcon} />
            {children}
        </div>
    );
};
