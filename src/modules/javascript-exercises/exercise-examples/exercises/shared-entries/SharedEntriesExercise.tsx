import React from "react";
import { SimpleExerciseExample } from "../../simple-exercise-example";
import sharedEntries from "./sharedEntries?raw";
import sharedEntriesTest from "./sharedEntries.test?raw";

export const SharedEntriesExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Shared entries"
            exerciseFiles={[
                {
                    content: sharedEntries,
                    name: "sharedEntries.ts",
                },
                {
                    content: sharedEntriesTest,
                    name: "sharedEntries.test.ts",
                },
            ]}
        />
    );
};
