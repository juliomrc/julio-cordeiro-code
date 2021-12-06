import React from "react";
import { SimpleExerciseExample } from "../../simple-exercise-example";
import maxWoodLength from "./maxWoodLength?raw";
import maxWoodLengthTest from "./maxWoodLength.test?raw";

export const MaxWoodLengthExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Maximum wood length (binary search)"
            exerciseFiles={[
                {
                    content: maxWoodLength,
                    name: "maxWoodLength.ts",
                },
                {
                    content: maxWoodLengthTest,
                    name: "maxWoodLength.test.ts",
                },
            ]}
        />
    );
};
