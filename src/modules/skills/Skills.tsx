import React from "react";
import { PageHeader } from "@components/text/page-header";
import { TwoColumns } from "@components/containers/two-columns";
import { SectionParagraph } from "@components/text/section-paragraph";
import { useSkillsStyles } from "./useSkillsStyles";
import { SkillBarGroup } from "./skill-bar-group";
import { coreSkills, otherTechnologies } from "./skillsDefinitions";

export const Skills: React.FC = () => {
    const styles = useSkillsStyles();
    return (
        <div className={styles.centeredFullContent}>
            <PageHeader>Skills</PageHeader>
            <SectionParagraph>
                Proactive, autonomous, quick learner and great teacher. Capable
                of building the whole frontend product and glad to take
                ownership of the development.
            </SectionParagraph>
            <TwoColumns singleColumnMobile breakpoint="sm">
                <SkillBarGroup title="Core technologies" skills={coreSkills} />
                <SkillBarGroup
                    title="Other technologies"
                    skills={otherTechnologies}
                    baseDelay={500}
                />
            </TwoColumns>
        </div>
    );
};

export default Skills;
