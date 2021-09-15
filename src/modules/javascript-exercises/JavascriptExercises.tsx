import React from "react";
import { PageHeader } from "@components/text/page-header";
import { SectionParagraph } from "@components/text/section-paragraph";
import { Link } from "@components/inputs/link";

export const JavascriptExercises: React.FC = () => {
    return (
        <>
            <PageHeader>Javascript exercises</PageHeader>
            <SectionParagraph>
                Like every programmer, I also need to practice my Javascript
                (and mathematics, of course) proficiency. In this section I will
                put some examples of the stuff I've been solving.
            </SectionParagraph>
            <SectionParagraph>
                In the meantime, you can check my (just started) progress in{" "}
                <Link
                    target="_blank"
                    href="https://app.codesignal.com/profile/julio_c_tzp"
                >
                    CodeSignal
                </Link>
                .
            </SectionParagraph>
        </>
    );
};

export default JavascriptExercises;
