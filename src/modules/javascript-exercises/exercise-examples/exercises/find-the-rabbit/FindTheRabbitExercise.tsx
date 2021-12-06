import React from "react";
import { SimpleExerciseExample } from "../../simple-exercise-example";
import findTheRabbit from "./findTheRabbit?raw";
import lineOfHolesWithJumpingRabbit from "./lineOfHolesWithJumpingRabbit?raw";
import findTheRabbitTest from "./findTheRabbit.test?raw";

export const FindTheRabbitExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="Find the rabbit"
            exerciseFiles={[
                {
                    content: findTheRabbit,
                    name: "findTheRabbit.ts",
                },
                {
                    content: lineOfHolesWithJumpingRabbit,
                    name: "lineOfHolesWithJumpingRabbit.ts",
                },
                {
                    content: findTheRabbitTest,
                    name: "findTheRabbit.test.ts",
                },
            ]}
        />
    );
};
