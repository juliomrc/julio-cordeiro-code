import React from "react";
import { defaultWindowScrollOptions } from "@components/scrollView/defaultWindowScrollOptions";
import { shakeX } from "@resources/constants/animation-presets";
import { useErrorMessageStyles } from "./useErrorMessageStyles";

const errorMessageId = "error-message";

export const ErrorMessage: React.FC = ({ children }) => {
    const styles = useErrorMessageStyles();
    return (
        <span className={styles.errorMessage} id={errorMessageId}>
            {children}
        </span>
    );
};

export const scrollAndShakeFirstError = () => {
    const firstErrorMessage = document.getElementById(errorMessageId);

    firstErrorMessage?.scrollIntoView(defaultWindowScrollOptions);
    firstErrorMessage?.animate(shakeX.keyframes, shakeX.options);
};
