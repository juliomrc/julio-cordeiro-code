import React from "react";
import { SimpleExerciseExample } from "../../simple-exercise-example";
import sleep from "./sleep?raw";
import sleepTest from "./sleep.test?raw";

export const SleepExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Sleep"
            exerciseFiles={[
                {
                    content: sleep,
                    name: "sleep.ts",
                },
                {
                    content: sleepTest,
                    name: "sleep.test.ts",
                },
            ]}
        />
    );
};
