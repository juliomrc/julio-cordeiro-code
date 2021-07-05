import React from "react";
import {
    Switch as MaterialUISwitch,
    SwitchProps as MaterialUISwitchProps,
} from "@material-ui/core";

interface SwitchProps extends MaterialUISwitchProps {
    onValueChange?: (checked: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({
    onChange,
    onValueChange,
    ...restProps
}) => {
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        checked: boolean,
    ) => {
        if (onValueChange) {
            onValueChange(checked);
        }
        if (onChange) {
            onChange(event, checked);
        }
    };

    return <MaterialUISwitch {...restProps} onChange={handleChange} />;
};
