import React from "react";
import { PageHeader } from "@components/text/page-header";
import { SectionParagraph } from "@components/text/section-paragraph";
import { useWorkStyles } from "./useWorkStyles";
import { WorkExample } from "./work-example";
import { FormManagement } from "./examples/form-management";
import { NavigationBlockerExample } from "./examples/navigation-blocker-example";

export const Work: React.FC = () => {
    const styles = useWorkStyles();
    return (
        <div>
            <PageHeader>Work</PageHeader>
            <SectionParagraph className={styles.description}>
                It is hard to present on a CV all the work I've done, especially
                when said work is done in private repositories. Here I will try
                to present examples of some of the things I've build before.
                This whole website is publicly available on Github, so feel free
                to check out the source code too!
            </SectionParagraph>
            <WorkExample header={"Form management"}>
                <FormManagement />
            </WorkExample>
            <WorkExample header={"Navigation blocker"}>
                <NavigationBlockerExample />
            </WorkExample>
        </div>
    );
};

export default Work;
