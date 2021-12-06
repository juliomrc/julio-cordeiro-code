import React from "react";
import { SimpleExerciseExample } from "../../simple-exercise-example";
import sortMatrixByNumberOfRepetitionsAndByValue from "./sortMatrixByNumberOfRepetitionsAndByValue?raw";
import sortMatrixByNumberOfRepetitionsAndByValueTest from "./sortMatrixByNumberOfRepetitionsAndByValue.test?raw";

export const SortMatrixByNumberOfRepetitionsAndByValueExercise: React.FC =
    () => {
        return (
            <SimpleExerciseExample
                header="Sort matrix by number of repetitions and by value"
                exerciseFiles={[
                    {
                        content: sortMatrixByNumberOfRepetitionsAndByValue,
                        name: "sortMatrixByNumberOfRepetitionsAndByValue.ts",
                    },
                    {
                        content: sortMatrixByNumberOfRepetitionsAndByValueTest,
                        name: "sortMatrixByNumberOfRepetitionsAndByValue.test.ts",
                    },
                ]}
            />
        );
    };
