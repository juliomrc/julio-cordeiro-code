import React from "react";
import { Link } from "@components/inputs/link";
import { SectionHeader } from "../../../components/text/section-header";
import { SectionParagraph } from "../../../components/text/section-paragraph";
import { StepperSection } from "../about-section-stepper";
import { Typography } from "@components/text/typography";
import { ExperienceSection } from "./ExperienceSection";

export const Experience: React.FC = () => {
    return (
        <>
            <SectionHeader>
                <StepperSection stepId="Experience">
                    ... my experience
                </StepperSection>
            </SectionHeader>
            <Typography variant="h4">ITSector</Typography>
            <SectionParagraph>
                I started programming professionally in 01/2018 as a consultant
                for{" "}
                <Link target={"_blank"} href="http://www.itsector.pt/">
                    ITSector
                </Link>{" "}
                where I had a one month training in .NET MVC and Webforms.
            </SectionParagraph>
            <ExperienceSection
                stepId={"Puzzle"}
                title={"Puzzle"}
                technologies={["MVC", "C#", "SQL", "RWD", "HTML5", "CSS3"]}
                description={
                    <>
                        After training my first project was part of{" "}
                        <Link target={"_blank"} href={"https://puzzle.pt/"}>
                            Puzzle
                        </Link>
                        , a brand by BNIEuropa where anyone can ask for a credit
                        or a credit card 100% online. At the time the solution
                        was built on MVC and although I was working fullstack, I
                        was mostly responsible for the frontend. My team was
                        responsible for integrating a new card system with the
                        existing credit system. The team had 4 developers and
                        the project lasted 7 months.
                    </>
                }
            />
            <ExperienceSection
                stepId={"Bank Millennium"}
                title={"Bank Millennium"}
                technologies={[
                    "React",
                    "typescript",
                    "javascript",
                    "react-router",
                    "redux",
                    "webpack",
                    "a11y",
                    "material-ui",
                    "storybook",
                    "formik",
                    "AWD",
                    "jest",
                    "testing-library",
                    "enzyme",
                    "jenkins",
                    "eslint",
                    "stylelint",
                    "prettier",
                    "ES6",
                    "less",
                ]}
                description={
                    <>
                        For my second project, I worked on the revamp of{" "}
                        <Link
                            target={"_blank"}
                            href={"https://www.bankmillennium.pl/en/"}
                        >
                            Bank Millennium
                        </Link>
                        's homeBanking website (if you are a client, that is the
                        part you see after you log in). The bank wanted the
                        website to be modern and very interactive and for that
                        they chose React. The new website was set up by two
                        architects for about 4 months at which point me and
                        several other developers joined to start working on
                        implementing new processes. I worked in every aspect of
                        the website, from forms to bundle management and webview
                        integration. This was a large scale application and also
                        a large scale team. My team had two or three FE
                        developers, but there were between five and ten
                        different teams working on the same product.
                    </>
                }
            />
            <ExperienceSection
                stepId={"Memcare"}
                title={"Memcare"}
                technologies={[
                    "React",
                    "typescript",
                    "javascript",
                    "react-router",
                    "redux",
                    "redux-thunk",
                    "webpack",
                    "i18next",
                    "material-ui",
                    "jest",
                    "testing-library",
                    "eslint",
                    "ES6",
                    "RWD",
                    "styled-components",
                ]}
                description={
                    <>
                        After working in the corporate world, I wanted to try
                        the opposite: a small startup environment. Currently I
                        work for{" "}
                        <Link
                            target="_blank"
                            href="https://www.memcare.com/en/"
                        >
                            Memcare
                        </Link>
                        . We offer a few different products, but mostly I work
                        on a CRM for funeral houses. I am responsible for the
                        whole FE ecosystem and the whole development team has
                        two FE, two BE developers and one QA tester.
                    </>
                }
            />
        </>
    );
};
