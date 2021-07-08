import React from "react";
import { Link } from "@components/inputs/link";
import { routes } from "@resources/constants/routes";
import { SectionParagraph } from "@components/text/section-paragraph";

export const HomepageDescription = () => (
    <>
        <SectionParagraph>
            My name is Júlio Cordeiro, I am a frontend developer and this is my{" "}
            <i>portfolio / playground / CV</i> website.
        </SectionParagraph>
        <SectionParagraph>
            Check out the <Link to={routes.skills}>skills section</Link> and
            maybe follow me on{" "}
            <Link target="_blank" href={"https://github.com/juliomrc"}>
                github
            </Link>
            ? :)
        </SectionParagraph>
    </>
);
