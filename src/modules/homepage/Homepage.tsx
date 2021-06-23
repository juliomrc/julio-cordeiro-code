import React from "react";
import { Link } from "@components/inputs/link";
import { routes } from "@resources/constants/routes";
import { SectionParagraph } from "@components/text/section-paragraph";
import { AnimatedPageHeader } from "@components/text/animated-page-header/AnimatedPageHeader";
import { useHomepageStyles } from "./useHomepageStyles";

export const Homepage: React.FC = () => {
    const styles = useHomepageStyles();

    return (
        <div className={styles.centeredContent}>
            <AnimatedPageHeader
                strings={[
                    "Welcome to my website",
                    "Welcome to my playground",
                    "Welcome to my CV?",
                    "Welcome to my CV?.. humm ^1000",
                    "Welcome! :)",
                ]}
            />
            <SectionParagraph>
                My name is Julio Cordeiro, I am a frontend developer and this is
                my <i>portfolio / playground / CV</i> website.
            </SectionParagraph>
            <SectionParagraph>
                Check out my <Link to={routes.about}>profile</Link> and maybe
                follow me on{" "}
                <Link target="_blank" href={"https://github.com/juliomrc"}>
                    github
                </Link>
                ? :)
            </SectionParagraph>
        </div>
    );
};

export default Homepage;
