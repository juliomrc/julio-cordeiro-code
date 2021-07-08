import React, { useContext } from "react";
import { Step, StepButton, Stepper } from "@material-ui/core";
import { AboutSection, aboutSections } from "./about-sections";
import { StepperContext } from "./StepperContext";
import { defaultWindowScrollOptions } from "@components/scroll-view/defaultWindowScrollOptions";
import { shakeX } from "@resources/constants/animation-presets";

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
            sectionElement?.animate(shakeX.keyframes, shakeX.options);
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
