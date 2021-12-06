import React from "react";
import { SimpleExerciseExample } from "../../simple-exercise-example";
import deDuplicate from "./deDuplicate?raw";
import deDuplicateTest from "./deDuplicate.test?raw";

export const DeDuplicateExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Remove duplicated strings"
            exerciseFiles={[
                {
                    content: deDuplicate,
                    name: "deDuplicate.ts",
                },
                {
                    content: deDuplicateTest,
                    name: "deDuplicate.test.ts",
                },
            ]}
        />
    );
};
