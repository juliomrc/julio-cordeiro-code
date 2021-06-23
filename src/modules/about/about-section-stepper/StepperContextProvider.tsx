import React, { useState } from "react";
import { AboutSection } from "./about-sections";
import { StepperContext } from "./StepperContext";

export const StepperContextProvider: React.FC = ({ children }) => {
    const [visibleSteps, setVisibleSteps] = useState<AboutSection[]>([]);

    const handleSetStepVisibility = (
        stepId: AboutSection,
        isVisible: boolean,
    ) => {
        if (isVisible) {
            setVisibleSteps([...visibleSteps, stepId]);
            return;
        }
        setVisibleSteps(visibleSteps.filter((step) => step !== stepId));
    };

    return (
        <StepperContext.Provider
            value={{
                visibleSteps,
                setStepIsVisible: handleSetStepVisibility,
            }}
        >
            {children}
        </StepperContext.Provider>
    );
};
