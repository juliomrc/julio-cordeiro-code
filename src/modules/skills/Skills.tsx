import React from "react";
import { PageHeader } from "@components/text/page-header";
import { useSkillsStyles } from "./useSkillsStyles";
import { SkillBars } from "./skill-bars";

export const Skills: React.FC = () => {
    const styles = useSkillsStyles();
    return (
        <div className={styles.centeredFullContent}>
            <PageHeader>Skills</PageHeader>
            <SkillBars />
        </div>
    );
};

export default Skills;
