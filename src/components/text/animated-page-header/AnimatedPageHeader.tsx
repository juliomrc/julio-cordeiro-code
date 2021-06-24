import React from "react";
import { PageHeader } from "../page-header";
import { TypedAnimation } from "../typed-animation";
import { useIsPreloaderActive } from "@components/preloader-context";

interface AnimatedPageHeaderProps {
    strings: string[];
    onAnimationCompleted: () => void;
}

export const AnimatedPageHeader: React.FC<AnimatedPageHeaderProps> = ({
    strings,
    onAnimationCompleted,
}) => {
    const isPreloaderActive = useIsPreloaderActive();

    return (
        <PageHeader>
            {isPreloaderActive ? (
                <span style={{ whiteSpace: "pre" }}> </span>
            ) : (
                <TypedAnimation
                    startDelay={500}
                    backSpeed={30}
                    onComplete={onAnimationCompleted}
                    strings={strings}
                />
            )}
        </PageHeader>
    );
};
