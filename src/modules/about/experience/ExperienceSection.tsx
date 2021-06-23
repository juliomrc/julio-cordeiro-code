import { SectionParagraph } from "@components/text/section-paragraph";
import { Typography } from "@components/text/typography";
import React from "react";
import { StepperSection } from "../about-section-stepper";
import { AboutSection } from "../about-section-stepper";

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
    return (
        <StepperSection stepId={stepId}>
            <Typography color="textPrimary" variant="h5">
                {title}
            </Typography>
            <SectionParagraph>{description}</SectionParagraph>
            <SectionParagraph>
                <b>Technologies: </b>{" "}
                {technologies.map((item, index) => {
                    if (index === technologies.length - 1) {
                        return item;
                    }
                    return `${item}, `;
                })}
            </SectionParagraph>
        </StepperSection>
    );
};
