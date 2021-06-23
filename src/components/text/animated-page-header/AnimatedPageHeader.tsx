import React from "react";
import { PageHeader } from "../page-header";
import { TypedAnimation } from "../typed-animation";
import { useIsPreloaderActive } from "@components/preloader-context";

interface AnimatedPageHeaderProps {
    strings: string[];
}

export const AnimatedPageHeader: React.FC<AnimatedPageHeaderProps> = ({
    strings,
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
                    strings={strings}
                />
            )}
        </PageHeader>
    );
};
