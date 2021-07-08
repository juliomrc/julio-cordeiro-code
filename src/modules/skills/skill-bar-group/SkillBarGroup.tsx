import React from "react";
import { Typography } from "@components/text/typography";
import { useSkillBarGroupStyles } from "./useSkillBarGroupStyles";
import { SkillBar } from "./skill-bar";

export interface SkillDefinition {
    name: string;
    percentage: number;
    hoverProgressLabel?: string;
}
interface SkillsBarGroupProps {
    skills: SkillDefinition[];
    title: string;
}

export const SkillBarGroup: React.FC<SkillsBarGroupProps> = ({
    skills,
    title,
}) => {
    const styles = useSkillBarGroupStyles();
    return (
        <div className={styles.barGroup}>
            <Typography className={styles.header} variant={"h3"}>
                {title}
            </Typography>
            {skills.map((skill, index) => {
                const maximumDuration = skills.length * 300;
                const delay = index * 150;
                const duration = maximumDuration - delay;
                return (
                    <SkillBar
                        key={index}
                        name={skill.name}
                        percentage={skill.percentage}
                        delay={delay}
                        duration={duration}
                        hoverProgressLabel={skill.hoverProgressLabel}
                    />
                );
            })}
        </div>
    );
};
