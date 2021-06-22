import React, { useEffect } from "react";
import { Presets } from "react-component-transition";
import { Switch, useLocation } from "react-router-dom";
import { useAnimatedSwitchStyles } from "./useAnimatedSwitchStyles";
import { useScrollWindowToTop } from "@components/scrollView/useScrollWindowToTop";

export const AnimatedSwitch: React.FC = ({ children }) => {
    const location = useLocation();

    const scrollWindowToTop = useScrollWindowToTop();

    useEffect(() => {
        scrollWindowToTop();
    }, [location]);

    const styles = useAnimatedSwitchStyles();

    return (
        <Presets.TransitionFade className={styles.fullSize}>
            <Switch key={location.key} location={location}>
                {children}
            </Switch>
        </Presets.TransitionFade>
    );
};
