import React from "react";
import { Link } from "@components/inputs/link";
import { SectionHeader } from "../../../components/text/section-header";
import { SectionParagraph } from "../../../components/text/section-paragraph";
import pdfCV from "./CV_Julio_Cordeiro.pdf";
import { StepperSection } from "../about-section-stepper";
import { SubsectionHeader } from "@components/text/subsection-header";

export const Experience: React.FC = () => {
    return (
        <>
            <StepperSection stepId="Experience">
                <SectionHeader>My experience</SectionHeader>
            </StepperSection>
            <SectionParagraph>
                TL;DR: You can get my CV{" "}
                <Link href={pdfCV} target="_blank">
                    here
                </Link>
                .
            </SectionParagraph>
            <SubsectionHeader>ITSector</SubsectionHeader>
            <SectionParagraph>
                I started programming professionally in January 2018 as a
                consultant for{" "}
                <Link target={"_blank"} href="http://www.itsector.pt/">
                    ITSector
                </Link>
                .
            </SectionParagraph>
            <StepperSection stepId="Puzzle">
                <SectionParagraph>
                    My first project was part of{" "}
                    <Link target={"_blank"} href={"https://puzzle.pt/"}>
                        Puzzle
                    </Link>
                    , a brand by BNIEuropa where anyone can ask for a credit or
                    a credit card 100% online. At the time the solution was
                    built on MVC and although I was working fullstack, I was
                    mostly responsible for the frontend. My team was responsible
                    for integrating the credit card system with the existing
                    credit system.
                </SectionParagraph>
                <SectionParagraph>
                    <b>Technologies: </b> MVC, C#, SQL, RWD, HTML5, CSS3
                </SectionParagraph>
            </StepperSection>
            <StepperSection stepId="Bank Millennium">
                <SectionParagraph>
                    In my second project I worked on the revamp of{" "}
                    <Link
                        target={"_blank"}
                        href={"https://www.bankmillennium.pl/en/"}
                    >
                        Bank Millennium
                    </Link>
                    's homeBanking website (if you are a client, that is the
                    part you see after you log in). The website had a total
                    rework in both design and technology and I was part of it
                    almost since the very beginning. The new website was set up
                    by two architects for about 4 months at which point me and
                    several other developers joined to start working on new
                    processes.
                </SectionParagraph>
                <SectionParagraph>
                    <b>Technologies: </b> React, typescript, javascript,
                    react-router, redux, webpack, a11y, material-ui, storybook,
                    formik, material-ui, AWD, jest, testing-library, enzyme,
                    jenkins, eslint, stylelint, prettier, ES6, less
                </SectionParagraph>
            </StepperSection>
            <StepperSection stepId="Memcare">
                <SubsectionHeader>Memcare</SubsectionHeader>

                <SectionParagraph>
                    <b>Technologies: </b> React, typescript, javascript,
                    react-router, redux, redux-thunk, webpack, i18next, phrase,
                    material-ui, jest, testing-library, eslint, ES6, RWD,
                    styled-components
                </SectionParagraph>
            </StepperSection>
        </>
    );
};
