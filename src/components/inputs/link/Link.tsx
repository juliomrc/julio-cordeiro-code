import React from "react";
import {
    Link as MaterialUILink,
    LinkProps as MaterialUILinkProps,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

export const Link: React.FC<MaterialUILinkProps<NavLink>> = (props) => {
    return <MaterialUILink component={NavLink} {...props} />;
};
