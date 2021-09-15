import React, { useState } from "react";
import { Presets } from "react-component-transition";
import { Paper } from "@material-ui/core";
import { Typography } from "@components/text/typography";
import { ExpandCollapseButton } from "@components/inputs/expand-collapse-button";
import { useExpandableCardWithHeaderStyles } from "./useExpandableCardWithHeaderStyles";

export interface ExpandableCardWithHeaderProps {
    header: string;
}

export const ExpandableCardWithHeader: React.FC<ExpandableCardWithHeaderProps> =
    ({ header, children }) => {
        const [isExpanded, setIsExpanded] = useState<boolean>(false);

        const styles = useExpandableCardWithHeaderStyles();

        return (
            <Paper className={styles.paper}>
                <div className={styles.header}>
                    <Typography className={styles.title}>{header}</Typography>
                    <ExpandCollapseButton
                        isExpanded={isExpanded}
                        onClick={setIsExpanded}
                    />
                </div>
                <Presets.TransitionExpandVertical className={styles.content}>
                    {isExpanded && <>{children}</>}
                </Presets.TransitionExpandVertical>
            </Paper>
        );
    };
