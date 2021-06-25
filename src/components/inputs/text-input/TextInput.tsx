import React from "react";
import { TextField, OutlinedTextFieldProps } from "@material-ui/core";
import { Presets } from "react-component-transition";

export interface TextInputProps extends Partial<OutlinedTextFieldProps> {
    onValueChange?: (value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({
    onValueChange,
    onChange,
    value,
    helperText,
    ...restProps
}) => {
    const nonNullableValue = value != null ? value : "";

    const handleOnChange = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
        if (onValueChange) {
            onValueChange(event.target.value);
        }

        if (onChange) {
            onChange(event);
        }
    };

    const animatedHelperText = (
        <Presets.TransitionExpandVertical>
            {!!helperText && helperText}
        </Presets.TransitionExpandVertical>
    );

    return (
        <TextField
            value={nonNullableValue}
            onChange={handleOnChange}
            helperText={animatedHelperText}
            {...restProps}
        />
    );
};

TextInput.defaultProps = {
    InputLabelProps: {
        shrink: true,
    },
};
