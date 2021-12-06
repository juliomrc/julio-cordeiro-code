import React from "react";
import { SimpleExerciseExample } from "../../simple-exercise-example";
import invertBinaryTree from "./invertBinaryTree?raw";
import invertBinaryTreeTest from "./invertBinaryTree.test?raw";

export const InvertBinaryTreeExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Invert a binary tree"
            exerciseFiles={[
                {
                    content: invertBinaryTree,
                    name: "invertBinaryTree.ts",
                },
                {
                    content: invertBinaryTreeTest,
                    name: "invertBinaryTree.test.ts",
                },
            ]}
        />
    );
};
