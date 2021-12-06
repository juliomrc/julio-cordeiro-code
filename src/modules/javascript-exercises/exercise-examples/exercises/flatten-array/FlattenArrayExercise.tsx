import React from "react";
import { SimpleExerciseExample } from "../../simple-exercise-example";
import flattenArray from "./flatten-array?raw";
import flattenArrayTest from "./flatten-array.test?raw";

export const FlattenArrayExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Flatten array"
            exerciseFiles={[
                {
                    content: flattenArray,
                    name: "flattenArray.ts",
                },
                {
                    content: flattenArrayTest,
                    name: "flattenArray.test.ts",
                },
            ]}
        />
    );
};
