import React from "react";
import { SimpleExerciseExample } from "../../../simple-exercise-example";
import genericTraverseMatrixDiagonally from "./genericTraverseMatrixDiagonally?raw";
import getLoopStartingPositions from "./getLoopStartingPositions?raw";
import traverseDiagonal from "./traverseDiagonal?raw";
import traverseMatrixDiagonallyExercises from "./traverseMatrixDiagonallyExercises?raw";
import genericTraverseMatrixDiagonallyTest from "./genericTraverseMatrixDiagonally.test?raw";

export const GenericTraverseMatrixDiagonallyExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Generic traverse matrix diagonally"
            exerciseFiles={[
                {
                    content: genericTraverseMatrixDiagonally,
                    name: "genericTraverseMatrixDiagonally.ts",
                },
                {
                    content: getLoopStartingPositions,
                    name: "getLoopStartingPositions.ts",
                },
                {
                    content: traverseDiagonal,
                    name: "traverseDiagonal.ts",
                },
                {
                    content: genericTraverseMatrixDiagonallyTest,
                    name: "genericTraverseMatrixDiagonally.test.ts",
                },
                {
                    content: traverseMatrixDiagonallyExercises,
                    name: "traverseMatrixDiagonallyExercises.ts",
                },
            ]}
        />
    );
};
