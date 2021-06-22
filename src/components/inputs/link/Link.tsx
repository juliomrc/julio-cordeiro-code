import React from "react";
import {
    Link as MaterialUILink,
    LinkProps as MaterialUILinkProps,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

type AnchorTarget = "_blank" | "_self";

interface LinkProps extends Partial<MaterialUILinkProps<NavLink>> {
    target?: AnchorTarget;
}

export const Link: React.FC<LinkProps> = (props) => {
    if (props.to) {
        return <MaterialUILink component={NavLink} {...props} />;
    }

    return <MaterialUILink {...props} />;
};
