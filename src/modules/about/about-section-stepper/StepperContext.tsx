import React from "react";
import { AboutSection } from "./about-sections";

interface StepperContext {
    visibleSteps: AboutSection[];
    setStepIsVisible: (stepId: AboutSection, isVisible: boolean) => void;
}

export const StepperContext = React.createContext<StepperContext>({
    visibleSteps: [],
    setStepIsVisible: () => null,
});
