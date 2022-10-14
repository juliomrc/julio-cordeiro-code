import React from "react";
import { SimpleExerciseExample } from "../../simple-exercise-example";
import customJest from "./customJest?raw";
import customJestTest from "./customJest.test?raw";

export const CustomJestExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Implement a mini custom version of Jest"
            exerciseFiles={[
                {
                    content: customJest,
                    name: "customJest.ts",
                },
                {
                    content: customJestTest,
                    name: "customJest.test.ts",
                },
            ]}
        />
    );
};
