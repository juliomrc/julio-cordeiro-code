import React, { useState } from "react";
import { Presets } from "react-component-transition";
import { HomepageDescription } from "./HomepageDescription";
import { useCommonStyles } from "@resources/styles/useCommonStyles";
import { HomepageHeader } from "./homepage-header";

export const Homepage: React.FC = () => {
    const [showDescription, setShowDescription] = useState(false);

    const handleTypingIsComplete = () => {
        setShowDescription(true);
    };

    const styles = useCommonStyles();

    return (
        <div className={styles.centeredFullContent}>
            <HomepageHeader
                onAnimationInteractionOrComplete={handleTypingIsComplete}
            />
            <Presets.TransitionFade>
                {showDescription && <HomepageDescription />}
            </Presets.TransitionFade>
        </div>
    );
};

export default Homepage;
