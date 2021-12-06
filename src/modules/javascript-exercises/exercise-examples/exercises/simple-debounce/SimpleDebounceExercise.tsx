import React from "react";
import { SimpleExerciseExample } from "../../simple-exercise-example";
import simpleDebounce from "./simpleDebounce?raw";
import simpleDebounceTest from "./simpleDebounce.test?raw";

export const SimpleDebounceExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Simple debounce"
            exerciseFiles={[
                {
                    content: simpleDebounce,
                    name: "simpleDebounce.ts",
                },
                {
                    content: simpleDebounceTest,
                    name: "simpleDebounce.test.ts",
                },
            ]}
        />
    );
};
