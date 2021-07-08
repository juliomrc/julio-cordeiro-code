import React, { useState } from "react";
import { useProgressStyles } from "./useProgressStyles";

export interface ProgressProps {
    percentage: number;
    duration?: number;
    delay?: number;
    startOnHover?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({
    percentage,
    duration,
    delay,
    startOnHover,
}) => {
    const [showProgress, setShowProgress] = useState(!startOnHover);
    const styles = useProgressStyles(percentage, duration, delay);

    const handleMouseOver = () => {
        setShowProgress(true);
    };

    return (
        <div onMouseOver={handleMouseOver} className={styles.progressContainer}>
            {showProgress && <div className={styles.progress} />}
        </div>
    );
};
