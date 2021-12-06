import React from "react";
import { CustomBindExercise } from "./exercises/custom-bind";
import { AtMostOneDigitSwapExercise } from "./exercises/at-most-one-digit-swap";

export const ExerciseExamples: React.FC = () => {
    return (
        <>
            <CustomBindExercise />
            <AtMostOneDigitSwapExercise />
        </>
    );
};
