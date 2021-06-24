import React, { useState } from "react";
import { Presets } from "react-component-transition";
import { AnimatedPageHeader } from "@components/text/animated-page-header";
import { useHomepageStyles } from "./useHomepageStyles";
import { HomepageDescription } from "./HomepageDescription";

export const Homepage: React.FC = () => {
    const [showDescription, setShowDescription] = useState(false);

    const handleTypingIsComplete = () => {
        setShowDescription(true);
    };

    const styles = useHomepageStyles();

    return (
        <div className={styles.centeredContent}>
            <AnimatedPageHeader
                onAnimationCompleted={handleTypingIsComplete}
                strings={[
                    "Welcome to my website",
                    "Welcome to my playground",
                    "Welcome to my CV?",
                    "Welcome to my CV?.^500.^500.",
                    "Welcome! :)",
                ]}
            />
            <Presets.TransitionFade>
                {showDescription && <HomepageDescription />}
            </Presets.TransitionFade>
        </div>
    );
};

export default Homepage;
