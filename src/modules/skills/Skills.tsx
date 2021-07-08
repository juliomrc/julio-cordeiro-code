import React from "react";
import { PageHeader } from "@components/text/page-header";
import { useSkillsStyles } from "./useSkillsStyles";
import { SkillBarGroup } from "./skill-bar-group";
import { coreSkills, otherTechnologies } from "./skillsDefinitions";
import { TwoColumns } from "@components/containers/two-columns";

export const Skills: React.FC = () => {
    const styles = useSkillsStyles();
    return (
        <div className={styles.centeredFullContent}>
            <PageHeader>Skills</PageHeader>
            <TwoColumns singleColumnMobile breakpoint="sm">
                <SkillBarGroup title="Core technologies" skills={coreSkills} />
                <SkillBarGroup
                    title="Other technologies"
                    skills={otherTechnologies}
                />
            </TwoColumns>
        </div>
    );
};

export default Skills;
