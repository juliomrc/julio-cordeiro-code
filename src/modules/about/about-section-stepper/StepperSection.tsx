import React, { useContext, useEffect } from "react";
import { AboutSection } from "./about-sections";
import { StepperContext } from "./StepperContext";
import { useInView } from "react-intersection-observer";

interface StepperSectionProps {
    stepId: AboutSection;
}

export const StepperSection: React.FC<StepperSectionProps> = ({
    children,
    stepId,
}) => {
    const { setStepIsVisible } = useContext(StepperContext);
    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    useEffect(() => {
        setStepIsVisible(stepId, inView);
    }, [inView]);

    return (
        <div ref={ref} id={stepId}>
            {children}
        </div>
    );
};
