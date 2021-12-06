import React from "react";
import { SimpleExerciseExample } from "../../simple-exercise-example";
import atMostOneDigitSwap from "./atMostOneDigitSwap?raw";
import atMostOneDigitSwapTest from "./atMostOneDigitSwap.test?raw";

export const AtMostOneDigitSwapExercise: React.FC = () => {
    return (
        <SimpleExerciseExample
            header="At most one digit swap"
            exerciseFiles={[
                {
                    content: atMostOneDigitSwap,
                    name: "atMostOneDigitSwap.js",
                },
                {
                    content: atMostOneDigitSwapTest,
                    name: "atMostOneDigitSwap.test.js",
                },
            ]}
        />
    );
};
