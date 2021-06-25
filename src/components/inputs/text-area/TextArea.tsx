import React from "react";
import { TextInput, TextInputProps } from "../text-input";

export const TextArea: React.FC<TextInputProps> = (props) => {
    return <TextInput {...props} />;
};

TextArea.defaultProps = {
    multiline: true,
    rows: 5,
};
