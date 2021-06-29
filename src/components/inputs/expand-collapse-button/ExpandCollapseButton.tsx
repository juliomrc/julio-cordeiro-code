import React from "react";
import classNames from "classnames";
import { ExpandMore } from "@material-ui/icons";
import { IconButton } from "@components/inputs/icon-button";
import { useExpandCollapseButtonStyles } from "./useExpandCollapseButtonStyles";

interface ExpandCollapseButtonProps {
    onClick: (isExpanded: boolean) => void;
    isExpanded: boolean;
}

export const ExpandCollapseButton: React.FC<ExpandCollapseButtonProps> = ({
    isExpanded,
    onClick,
}) => {
    const handleClickExpandCollapse = () => {
        onClick(!isExpanded);
    };

    const styles = useExpandCollapseButtonStyles();

    return (
        <IconButton onClick={handleClickExpandCollapse}>
            <ExpandMore
                className={classNames(
                    styles.expandIcon,
                    isExpanded && styles.isExpanded,
                )}
            />
        </IconButton>
    );
};
