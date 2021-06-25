import React from "react";
import { Button as MaterialUIButton, ButtonProps } from "@material-ui/core";

export const Button: React.FC<ButtonProps> = (props) => {
    return <MaterialUIButton {...props} />;
};
