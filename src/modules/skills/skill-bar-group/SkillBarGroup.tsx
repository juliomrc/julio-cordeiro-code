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
    baseDelay?: number;
}

export const SkillBarGroup: React.FC<SkillsBarGroupProps> = ({
    skills,
    title,
    baseDelay,
}) => {
    const styles = useSkillBarGroupStyles();
    return (
        <div className={styles.barGroup}>
            <Typography className={styles.header} variant={"h3"}>
                {title}
            </Typography>
            {skills.map((skill, index) => {
                const maximumDuration = skills.length * 150;
                const relativeDelay = index * 50;
                const duration = maximumDuration - relativeDelay;
                return (
                    <SkillBar
                        key={index}
                        name={skill.name}
                        percentage={skill.percentage}
                        delay={baseDelay ?? 0 + relativeDelay}
                        duration={duration}
                        hoverProgressLabel={skill.hoverProgressLabel}
                    />
                );
            })}
        </div>
    );
};
