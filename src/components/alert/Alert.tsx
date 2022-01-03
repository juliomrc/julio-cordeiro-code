import React from "react";
import classNames from "classnames";
import { CrossButton } from "@components/inputs/cross-button";
import { useAlertStyles } from "./useAlertStyles";

interface AlertProps {
    onClose: () => void;
    className?: string;
}

export const Alert: React.FC<AlertProps> = ({
    onClose,
    className,
    children,
}) => {
    const styles = useAlertStyles();

    return (
        <div className={classNames(styles.alert, className)}>
            <CrossButton onClick={onClose} className={styles.closeIcon} />
            {children}
        </div>
    );
};
