import React from "react";
import { Switch as MaterialUISwitch, SwitchProps } from "@material-ui/core";

export const Switch: React.FC<SwitchProps> = (props) => {
    return <MaterialUISwitch {...props} />;
};
