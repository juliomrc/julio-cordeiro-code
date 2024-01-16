import React from "react";
import { PageHeader } from "@components/text/page-header";
import { SectionParagraph } from "@components/text/section-paragraph";
import { useCommonStyles } from "@resources/styles/useCommonStyles";
import { Link } from "@components/inputs/link";
import { routes } from "@resources/constants/routes";

export const ContinuousEducation: React.FC = () => {
    const styles = useCommonStyles();
    return (
        <div className={styles.centeredFullContent}>
            <PageHeader>Continuous education</PageHeader>
            <SectionParagraph>
                All programmers have to keep learning regularly as their career
                progresses. In our profession, learning is about becoming better
                and about not being left behind. The web moves at a ridiculous
                speed.
            </SectionParagraph>
            <SectionParagraph>
                With that said, it is impossible to list all the technologies or
                concepts I find and learn trying to solve problems at work. I
                will try to list some of my learnings/achievements, along with
                my opinion on some books I read and courses I took.
            </SectionParagraph>
            <br />
            <SectionParagraph>
                <Link target="_blank" href="https://a.co/d/jiYf3CE">
                    Clean Code by Robert C. Martin
                </Link>{" "}
                was my first entry into personal improvement outside of
                education sponsored by my employer. It is highly recommended by
                most people whom read it and it is still my number one book. I
                don't agree (or practice) with everything in the book, but it is
                a great starting point for anyone who wants to improve their
                code quality.
            </SectionParagraph>
            <SectionParagraph>
                <Link
                    target="_blank"
                    href="https://github.com/getify/You-Dont-Know-JS"
                >
                    You don't know JS
                </Link>{" "}
                was great to understand the nitty gritty of Javascript. I
                started reading it when I also was working on some{" "}
                <Link to={routes.javascriptExercises}>
                    javascript exercises
                </Link>{" "}
                and I really enjoyed it. I can't say I remember everything I
                read, but I am sure I came out with a much deeper knowledge of
                the language.
            </SectionParagraph>
            <SectionParagraph>
                I was looking for some other entry to improve my skills and came
                across{" "}
                <Link target="_blank" href="https://amzn.eu/d/5xFZlZ0">
                    Pragmatic Programmer by David Thomas and Andrew Hunt
                </Link>
                . It was highly recommended by a lot of people so I decided to
                give it a try. The book had some pretty good advice, although I
                feel like a big part of it was just common sense.
            </SectionParagraph>
        </div>
    );
};

export default ContinuousEducation;
