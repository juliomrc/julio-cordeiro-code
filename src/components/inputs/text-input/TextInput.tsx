import React from "react";
import { TextField, StandardTextFieldProps } from "@material-ui/core";
import { Presets } from "react-component-transition";
import { ErrorMessage } from "@components/form-management/error-message";

export interface TextInputProps extends Partial<StandardTextFieldProps> {
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
            {!!helperText && <ErrorMessage>{helperText}</ErrorMessage>}
        </Presets.TransitionExpandVertical>
    );

    return (
        <TextField
            value={nonNullableValue}
            onChange={handleOnChange}
            helperText={animatedHelperText}
            FormHelperTextProps={{
                // eslint-disable-next-line
                // @ts-ignore - https://github.com/mui-org/material-ui/issues/20360
                component: "div",
            }}
            {...restProps}
        />
    );
};

TextInput.defaultProps = {
    InputLabelProps: {
        shrink: true,
    },
};
