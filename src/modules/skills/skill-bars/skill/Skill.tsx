import React from "react";
import { useSkillStyles } from "./useSkillStyles";
import { Progress, ProgressProps } from "./progress";
import { Typography } from "@components/text/typography";

interface SkillProps extends ProgressProps {
    name: string;
}

export const Skill: React.FC<SkillProps> = ({ name, ...progressProps }) => {
    const styles = useSkillStyles();
    return (
        <div className={styles.skill}>
            <Typography className={styles.name}>{name}</Typography>
            <Progress {...progressProps} />
        </div>
    );
};
