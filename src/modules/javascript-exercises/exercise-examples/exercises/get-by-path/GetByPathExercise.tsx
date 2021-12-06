import React from "react";
import { SimpleExerciseExample } from "../../simple-exercise-example";
import getByPath from "./getByPath?raw";
import getByPathTest from "./getByPath.test?raw";

export const GetByPathExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Get attribute by path"
            exerciseFiles={[
                {
                    content: getByPath,
                    name: "getByPath.ts",
                },
                {
                    content: getByPathTest,
                    name: "getByPath.test.ts",
                },
            ]}
        />
    );
};
