import React from "react";
import { PageHeader } from "@components/text/page-header";
import { SectionParagraph } from "@components/text/section-paragraph";
import { Link } from "@components/inputs/link";
import { ExerciseExamples } from "./exercise-examples";

export const JavascriptExercises: React.FC = () => {
    return (
        <>
            <PageHeader>Javascript exercises</PageHeader>
            <SectionParagraph>
                Like every programmer, I also need to practice my Javascript
                (and mathematics, of course) proficiency. In no specific order,
                I'll be posting some examples of the stuff I've been solving.
                You can also follow my progress in{" "}
                <Link
                    target="_blank"
                    href="https://app.codesignal.com/profile/julio_c_tzp"
                >
                    CodeSignal
                </Link>
                .
            </SectionParagraph>
            <ExerciseExamples />
        </>
    );
};

export default JavascriptExercises;
