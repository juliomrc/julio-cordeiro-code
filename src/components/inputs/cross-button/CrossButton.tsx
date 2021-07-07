import React from "react";
import { Close } from "@material-ui/icons";
import { IconButton } from "@components/inputs/icon-button";

interface CrossButtonProps {
    onClick: () => void;
    className?: string;
}

export const CrossButton: React.FC<CrossButtonProps> = ({
    className,
    onClick,
}) => {
    return (
        <IconButton className={className} onClick={onClick}>
            <Close />
        </IconButton>
    );
};
