import React from "react";
import {
    IconButton as MaterialUIIconButton,
    IconButtonProps,
} from "@material-ui/core";

export const IconButton: React.FC<IconButtonProps> = (props) => {
    return <MaterialUIIconButton {...props} />;
};
