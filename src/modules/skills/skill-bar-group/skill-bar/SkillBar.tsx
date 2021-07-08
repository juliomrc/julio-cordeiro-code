import React from "react";
import { useSkillBarStyles } from "./useSkillBarStyles";
import { Progress, ProgressProps } from "./progress";
import { Typography } from "@components/text/typography";

interface SkillBarProps extends ProgressProps {
    name: string;
}

export const SkillBar: React.FC<SkillBarProps> = ({
    name,
    ...progressProps
}) => {
    const styles = useSkillBarStyles();
    return (
        <div className={styles.skill}>
            <Typography className={styles.name}>{name}</Typography>
            <Progress {...progressProps} />
        </div>
    );
};
