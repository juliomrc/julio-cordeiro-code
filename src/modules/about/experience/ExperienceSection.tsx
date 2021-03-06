import React from "react";
import { SectionParagraph } from "@components/text/section-paragraph";
import { Typography } from "@components/text/typography";
import { StepperSection } from "../about-section-stepper";
import { AboutSection } from "../about-section-stepper";
import { useExperienceSectionStyles } from "./useExperienceSectionStyles";

interface ExperienceSectionProps {
    stepId: AboutSection;
    title: string;
    description: React.ReactNode;
    technologies: string[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
    stepId,
    title,
    description,
    technologies,
}) => {
    const styles = useExperienceSectionStyles();

    return (
        <>
            <Typography
                className={styles.section}
                color="textPrimary"
                variant="h5"
            >
                <StepperSection stepId={stepId}>{title}</StepperSection>
            </Typography>
            <SectionParagraph>{description}</SectionParagraph>
            <SectionParagraph>
                <b>Technologies: </b>{" "}
                {technologies.map((item, index) => {
                    if (index === technologies.length - 1) {
                        return `${item}.`;
                    }
                    return `${item}, `;
                })}
            </SectionParagraph>
        </>
    );
};
