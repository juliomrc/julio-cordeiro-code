import React from "react";
import { CustomBindExercise } from "./exercises/custom-bind";
import { AtMostOneDigitSwapExercise } from "./exercises/at-most-one-digit-swap";
import { DeDuplicateExercise } from "./exercises/de-duplicate";
import { FlattenArrayExercise } from "./exercises/flatten-array";
import { GetByPathExercise } from "./exercises/get-by-path";

export const ExerciseExamples: React.FC = () => {
    return (
        <>
            <CustomBindExercise />
            <GetByPathExercise />
            <FlattenArrayExercise />
            <AtMostOneDigitSwapExercise />
            <DeDuplicateExercise />
        </>
    );
};
