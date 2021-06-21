import { useScrollElementIntoView } from "@components/scrollView/useScrollElementIntoView";
import React, { useEffect } from "react";
import { Presets } from "react-component-transition";
import { Switch, useLocation } from "react-router-dom";

interface AnimatedSwitchProps {
    basePathToAnimateOnlyDirectSubRoutes?: string;
}

const getDirectSubRoute = (currentRoutePath: string, basePath: string) => {
    const basePathPlusForwardSlash = basePath.length + 1;
    const subRoutePath = currentRoutePath.substring(basePathPlusForwardSlash);

    const subSubRouteStartIndex = subRoutePath.indexOf("/");

    const directSubRoute =
        subSubRouteStartIndex > 0
            ? subRoutePath.substring(0, subSubRouteStartIndex)
            : subRoutePath;

    return directSubRoute;
};

const getChangingKeyToTriggerAnimation = (
    fullRouteKey: string | undefined,
    currentRoutePath: string,
    basePathToAnimateOnlyDirectSubRoutes: string | undefined,
) => {
    let key = fullRouteKey;
    if (basePathToAnimateOnlyDirectSubRoutes) {
        key = getDirectSubRoute(
            currentRoutePath,
            basePathToAnimateOnlyDirectSubRoutes,
        );
    }

    return key;
};

export const AnimatedSwitch: React.FC<AnimatedSwitchProps> = ({
    children,
    basePathToAnimateOnlyDirectSubRoutes,
}) => {
    const location = useLocation();
    const key = getChangingKeyToTriggerAnimation(
        location.key,
        location.pathname,
        basePathToAnimateOnlyDirectSubRoutes,
    );

    const { elementToScrollToRef, scrollElementIntoView } =
        useScrollElementIntoView<HTMLDivElement>();

    useEffect(() => {
        scrollElementIntoView();
    }, [location]);

    return (
        <div ref={elementToScrollToRef}>
            <Presets.TransitionFade animateContainerDuration={200}>
                <Switch key={key} location={location}>
                    {children}
                </Switch>
            </Presets.TransitionFade>
        </div>
    );
};
