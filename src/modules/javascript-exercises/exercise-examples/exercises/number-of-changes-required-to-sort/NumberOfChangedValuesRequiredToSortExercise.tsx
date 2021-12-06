import React from "react";
import { SimpleExerciseExample } from "../../simple-exercise-example";
import numberOfChangedValuesRequiredToSort from "./numberOfChangedValuesRequiredToSort?raw";
import numberOfChangedValuesRequiredToSortTest from "./numberOfChangedValuesRequiredToSort.test?raw";

export const NumberOfChangedValuesRequiredToSortExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Number of changed values required to sort array"
            exerciseFiles={[
                {
                    content: numberOfChangedValuesRequiredToSort,
                    name: "numberOfChangedValuesRequiredToSort.ts",
                },
                {
                    content: numberOfChangedValuesRequiredToSortTest,
                    name: "numberOfChangedValuesRequiredToSort.test.ts",
                },
            ]}
        />
    );
};
