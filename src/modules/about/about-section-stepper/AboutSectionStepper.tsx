import React, { useContext } from "react";
import { Step, StepButton, Stepper } from "@material-ui/core";
import { AnimationTypes } from "react-component-transition";
import { AboutSection, aboutSections } from "./about-sections";
import { StepperContext } from "./StepperContext";
import { defaultWindowScrollOptions } from "@components/scrollView/defaultWindowScrollOptions";

interface AboutSectionStepperProps {
    className?: string;
}

export const AboutSectionStepper: React.FC<AboutSectionStepperProps> = ({
    className,
}) => {
    const { visibleSteps } = useContext(StepperContext);

    const activeStepNumber = Math.max(
        ...visibleSteps.map((visibleStep) =>
            aboutSections.indexOf(visibleStep),
        ),
    );

    const handleSectionStepClick = (section: AboutSection) => {
        const sectionElement = document.getElementById(section);
        sectionElement?.scrollIntoView(defaultWindowScrollOptions);
        if (section !== "Myself") {
            sectionElement?.animate(
                AnimationTypes.slideUp.enter.keyframes,
                AnimationTypes.slideUp.enter.options,
            );
        }
    };

    return (
        <Stepper
            className={className}
            orientation="vertical"
            activeStep={activeStepNumber}
        >
            {aboutSections.map((section, index) => (
                <Step key={index}>
                    <StepButton
                        disabled={false}
                        onClick={handleSectionStepClick.bind(null, section)}
                    >
                        {section}
                    </StepButton>
                </Step>
            ))}
        </Stepper>
    );
};
