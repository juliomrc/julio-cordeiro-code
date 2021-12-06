import React from "react";
import { SimpleExerciseExample } from "../../simple-exercise-example";
import promisify from "./promisify?raw";
import promisifyTest from "./promisify.test?raw";

export const PromisifyExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Promisify function"
            exerciseFiles={[
                {
                    content: promisify,
                    name: "promisify.ts",
                },
                {
                    content: promisifyTest,
                    name: "promisify.test.ts",
                },
            ]}
        />
    );
};
