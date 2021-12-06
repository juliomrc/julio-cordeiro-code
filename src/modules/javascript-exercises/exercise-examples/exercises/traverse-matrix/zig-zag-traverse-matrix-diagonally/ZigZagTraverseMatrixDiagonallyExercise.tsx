import React from "react";
import { SimpleExerciseExample } from "../../../simple-exercise-example";
import zigZagTraverseMatrixDiagonally from "./zigZagTraverseMatrixDiagonally?raw";
import zigZagTraverseMatrixDiagonallyTest from "./zigZagTraverseMatrixDiagonally.test?raw";

export const ZigZagTraverseMatrixDiagonallyExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Traverse a matrix diagonally and in zig zag"
            exerciseFiles={[
                {
                    content: zigZagTraverseMatrixDiagonally,
                    name: "zigZagTraverseMatrixDiagonally.ts",
                },
                {
                    content: zigZagTraverseMatrixDiagonallyTest,
                    name: "zigZagTraverseMatrixDiagonally.test.ts",
                },
            ]}
        />
    );
};
