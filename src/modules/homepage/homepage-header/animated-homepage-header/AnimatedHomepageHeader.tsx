import React, { useState } from "react";
import {
    TypedAnimation,
    useTypedAnimation,
} from "@components/text/typed-animation";
import { Button } from "@components/inputs/button";
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
        <div onMouseOver={handleMouseOver}>
            <PageHeader>
                <TypedAnimation domRef={domRef} />
            </PageHeader>
            <Presets.TransitionExpandVertical
                className={styles.buttonContainer}
            >
                {showButtons && (
                    <ButtonGroup>
                        <Button
                            onClick={animationHandlers.start}
                            size={"small"}
                        >
                            Play
                        </Button>
                        <Button
                            onClick={animationHandlers.pause}
                            size={"small"}
                        >
                            Pause
                        </Button>
                        <Button
                            onClick={animationHandlers.reset}
                            size={"small"}
                        >
                            Reset
                        </Button>
                    </ButtonGroup>
                )}
            </Presets.TransitionExpandVertical>
        </div>
    );
};
