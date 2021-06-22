import React from "react";
import { PageHeader } from "@components/text/page-header";
import { Experience } from "./experience";
import { Myself } from "./myself";
import { useAboutStyles } from "./useAboutStyles";

export const About: React.FC = () => {
    const styles = useAboutStyles();

    return (
        <div className={styles.about}>
            <PageHeader>About</PageHeader>
            <Myself />
            <Experience />
            <Experience />
            <Experience />
            <Experience />
            <Experience />
            <Experience />
        </div>
    );
};

export default About;
