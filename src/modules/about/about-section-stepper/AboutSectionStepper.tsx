import React, { useContext } from "react";
import { ButtonBase, Step, StepLabel, Stepper } from "@material-ui/core";
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
    };

    return (
        <Stepper
            className={className}
            orientation="vertical"
            activeStep={activeStepNumber}
        >
            {aboutSections.map((section, index) => (
                <Step key={index}>
                    <StepLabel>
                        <ButtonBase
                            onClick={handleSectionStepClick.bind(null, section)}
                        >
                            {section}
                        </ButtonBase>
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};
