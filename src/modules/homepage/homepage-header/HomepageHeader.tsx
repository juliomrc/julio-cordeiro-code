import React from "react";
import { useIsPreloaderActive } from "@components/preloader-context";
import {
    AnimatedHomepageHeader,
    AnimatedHomepageHeaderProps,
} from "./animated-homepage-header";

export const HomepageHeader: React.FC<AnimatedHomepageHeaderProps> = (
    props,
) => {
    const isPreloaderActive = useIsPreloaderActive();

    return isPreloaderActive ? (
        <span style={{ whiteSpace: "pre" }}> </span>
    ) : (
        <AnimatedHomepageHeader {...props} />
    );
};
