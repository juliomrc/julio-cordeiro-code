import React from "react";
import classnames from "classnames";
import { useInputsColumnStyles } from "./InputsColumn.styles";

export interface InputsColumnProps {
    className?: string;
}

export const InputsColumn: React.FC<InputsColumnProps> = ({
    children,
    className,
}) => {
    const cssClasses = useInputsColumnStyles();

    return (
        <div className={classnames(cssClasses.inputsColumn, className)}>
            {children}
        </div>
    );
};
