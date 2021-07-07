import React, { useState } from "react";
import classNames from "classnames";
import { PageHeader } from "@components/text/page-header";
import { Experience } from "./experience";
import { Myself } from "./myself";
import { useAboutStyles } from "./useAboutStyles";
import {
    AboutSectionStepper,
    StepperContextProvider,
} from "./about-section-stepper";
import { CV } from "./cv";
import { useDidMountTimeout } from "./useDidMountTimeout";

export const About: React.FC = () => {
    const [hiddenStepper, setHiddenStepper] = useState(true);
    const styles = useAboutStyles();

    useDidMountTimeout(() => {
        setHiddenStepper(false);
    }, 1000);

    return (
        <StepperContextProvider>
            <div className={styles.about}>
                <AboutSectionStepper
                    className={classNames(
                        styles.stepper,
                        hiddenStepper && styles.hiddenStepper,
                    )}
                />
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
