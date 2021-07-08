import React, { useState } from "react";
import { Pause, PlayArrow, Refresh } from "@material-ui/icons";
import {
    TypedAnimation,
    useTypedAnimation,
} from "@components/text/typed-animation";
import { IconButton } from "@components/inputs/icon-button";
import { ButtonGroup } from "@material-ui/core";
import { Presets } from "react-component-transition";
import { PageHeader } from "@components/text/page-header";
import { useAnimatedHomepageHeaderStyles } from "./useAnimatedHomepageHeaderStyles";

export interface AnimatedHomepageHeaderProps {
    onAnimationInteractionOrComplete: () => void;
}

export const AnimatedHomepageHeader: React.FC<AnimatedHomepageHeaderProps> = ({
    onAnimationInteractionOrComplete,
}) => {
    const [showButtons, setShowButtons] = useState(false);
    const { animationHandlers, domRef } = useTypedAnimation({
        startDelay: 500,
        typeSpeed: 30,
        backSpeed: 30,
        onComplete: onAnimationInteractionOrComplete,
        strings: [
            "Welcome to my website",
            "Welcome to my playground",
            "Welcome to my CV?",
            "Welcome to my CV?.^300.^300.",
            "Welcome! :)",
        ],
    });

    const handleMouseOver = () => {
        onAnimationInteractionOrComplete();
        setShowButtons(true);
    };

    const styles = useAnimatedHomepageHeaderStyles();

    return (
        <div className={styles.container} onMouseOver={handleMouseOver}>
            <PageHeader>
                <TypedAnimation domRef={domRef} />
            </PageHeader>
            <Presets.TransitionExpandVertical
                className={styles.buttonContainer}
            >
                {showButtons && (
                    <ButtonGroup>
                        <IconButton
                            onClick={animationHandlers.start}
                            size={"small"}
                        >
                            <PlayArrow />
                        </IconButton>
                        <IconButton
                            onClick={animationHandlers.pause}
                            size={"small"}
                        >
                            <Pause />
                        </IconButton>
                        <IconButton
                            onClick={animationHandlers.reset}
                            size={"small"}
                        >
                            <Refresh />
                        </IconButton>
                    </ButtonGroup>
                )}
            </Presets.TransitionExpandVertical>
        </div>
    );
};
