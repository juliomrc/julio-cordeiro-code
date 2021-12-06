import React from "react";
import { SimpleExerciseExample } from "../../simple-exercise-example";
import reverseString from "./reverseString?raw";
import reverseStringTest from "./reverseString.test?raw";

export const ReverseStringExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Reverse string"
            exerciseFiles={[
                {
                    content: reverseString,
                    name: "reverseString.ts",
                },
                {
                    content: reverseStringTest,
                    name: "reverseString.test.ts",
                },
            ]}
        />
    );
};
