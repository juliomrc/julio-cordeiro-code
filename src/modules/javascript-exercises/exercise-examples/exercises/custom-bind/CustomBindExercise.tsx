import React from "react";
import { SimpleExerciseExample } from "../../simple-exercise-example";
import customBind from "./customBind?raw";
import customBindTest from "./customBind.test?raw";

export const CustomBindExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Implement a custom .bind and .call"
            exerciseFiles={[
                {
                    content: customBind,
                    name: "customBind.ts",
                },
                {
                    content: customBindTest,
                    name: "customBind.test.ts",
                },
            ]}
        />
    );
};
