import React from "react";
import { PageHeader } from "@components/text/page-header";
import { SectionParagraph } from "@components/text/section-paragraph";
import { useWorkStyles } from "./useWorkStyles";

export const Work: React.FC = () => {
    const styles = useWorkStyles();
    return (
        <div>
            <PageHeader>Work</PageHeader>
            <SectionParagraph className={styles.description}>
                It is hard to explain on a CV all the work I've done, especially
                when said work is done in private repositories.
            </SectionParagraph>
            <SectionParagraph className={styles.description}>
                Here you will find examples of some of the things I've build
                before.
            </SectionParagraph>
        </div>
    );
};

export default Work;
