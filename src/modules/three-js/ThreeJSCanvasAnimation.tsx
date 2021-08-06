import classnames from "classnames";
import React, { useEffect } from "react";
import { threeJsCanvasId } from "./helpers/buildSceneCameraAndRenderer";
import { initializeThreeJS } from "./helpers/initialize";
import { useThreeJSStyles } from "./useThreeJSStyles";

interface ThreeJSCanvasAnimationProps {
    isThreeJSAbove: boolean;
}

export const ThreeJSCanvasAnimation: React.FC<ThreeJSCanvasAnimationProps> = ({
    isThreeJSAbove,
}) => {
    useEffect(() => {
        initializeThreeJS();
    }, []);

    const styles = useThreeJSStyles();

    return (
        <canvas
            id={threeJsCanvasId}
            className={classnames(
                styles.canvas,
                !isThreeJSAbove && styles.underContent,
            )}
        />
    );
};
