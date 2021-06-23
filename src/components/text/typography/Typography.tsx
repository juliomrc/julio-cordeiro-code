import React from "react";
import {
    Typography as MaterialUITypography,
    TypographyProps,
} from "@material-ui/core";

export const Typography: React.FC<TypographyProps> = (props) => {
    return <MaterialUITypography {...props} />;
};
