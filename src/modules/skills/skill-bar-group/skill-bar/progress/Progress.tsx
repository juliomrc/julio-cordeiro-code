import { Typography } from "@components/text/typography";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { Presets } from "react-component-transition";
import { getFillAnimation } from "./animationHelpers";
import { useProgressStyles } from "./useProgressStyles";

export interface ProgressProps {
    percentage: number;
    duration: number;
    delay: number;
    hoverProgressLabel?: string;
}

export const Progress: React.FC<ProgressProps> = ({
    percentage,
    duration,
    delay,
    hoverProgressLabel,
}) => {
    const [showHoverProgress, setShowHoverProgress] = useState(false);
    const styles = useProgressStyles();

    const handleMouseEnter = () => {
        setShowHoverProgress(true);
    };
    const handleMouseLeave = () => {
        setShowHoverProgress(false);
    };

    const progressRef = useRef<HTMLDivElement>(null);
    const hoverProgressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animation = getFillAnimation(percentage, duration, delay);
        progressRef.current?.animate(animation.keyframes, animation.options);
    }, []);

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.progressContainer}
        >
            <div ref={progressRef} className={styles.progress}>
                <Presets.TransitionFade>
                    {showHoverProgress && (
                        <Typography
                            ref={hoverProgressRef}
                            className={classNames(
                                styles.progress,
                                styles.hoverProgress,
                            )}
                        >
                            {hoverProgressLabel}
                        </Typography>
                    )}
                </Presets.TransitionFade>
            </div>
        </div>
    );
};
