import React from "react";
import { PageHeader } from "@components/text/page-header";
import { Experience } from "./experience";
import { Myself } from "./myself";
import { useAboutStyles } from "./useAboutStyles";
import {
    AboutSectionStepper,
    StepperContextProvider,
} from "./about-section-stepper";
import { CV } from "./cv";

export const About: React.FC = () => {
    const styles = useAboutStyles();

    return (
        <StepperContextProvider>
            <div className={styles.about}>
                <AboutSectionStepper className={styles.stepper} />
                <div className={styles.content}>
                    <PageHeader>
                        About...
                        <CV />
                    </PageHeader>
                    <Myself />
                    <Experience />
                </div>
            </div>
        </StepperContextProvider>
    );
};

export default About;
