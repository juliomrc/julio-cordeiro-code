import classnames from "classnames";
import React, { useEffect } from "react";
import { threeJsCanvasId } from "./helpers/buildSceneCameraAndRenderer";
import { initialize } from "./helpers/initialize";
import { useThreeJSStyles } from "./useThreeJSStyles";

interface ThreeJSCanvasAnimationProps {
    isThreeJSAbove: boolean;
}

export const ThreeJSCanvasAnimation: React.FC<ThreeJSCanvasAnimationProps> = ({
    isThreeJSAbove,
}) => {
    useEffect(() => {
        let onUnmount: () => void;

        const initializeThreeJs = async () => {
            const { handleUnmount } = await initialize();
            onUnmount = handleUnmount;
        };

        initializeThreeJs();

        return () => {
            if (onUnmount) {
                onUnmount();
            }
        };
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
