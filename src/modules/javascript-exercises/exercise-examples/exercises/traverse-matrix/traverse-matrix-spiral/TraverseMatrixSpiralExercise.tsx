import React from "react";
import { SimpleExerciseExample } from "../../../simple-exercise-example";
import traverseMatrixSpiral from "./traverseMatrixSpiral?raw";
import traverseMatrixSpiralTest from "./traverseMatrixSpiral.test?raw";

export const TraverseMatrixSpiralExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Traverse matrix in a spiral"
            exerciseFiles={[
                {
                    content: traverseMatrixSpiral,
                    name: "traverseMatrixSpiral.ts",
                },
                {
                    content: traverseMatrixSpiralTest,
                    name: "traverseMatrixSpiral.test.ts",
                },
            ]}
        />
    );
};
