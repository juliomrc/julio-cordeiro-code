import React from "react";
import { PageHeader } from "@components/text/page-header";
import { SectionParagraph } from "@components/text/section-paragraph";
import { useWorkStyles } from "./useWorkStyles";
import { WorkExample } from "./work-example";
import { FormManagement } from "./examples/form-management";
import { NavigationBlockerExample } from "./examples/navigation-blocker-example";
import { DragAndDrop } from "./examples/drag-and-drop";
import { RequestStateHandling } from "./examples/request-state-handling";

export const Work: React.FC = () => {
    const styles = useWorkStyles();
    return (
        <div className={styles.fullContent}>
            <PageHeader>Work examples</PageHeader>
            <div className={styles.description}>
                <SectionParagraph>
                    It is hard to present on a CV all the work I've done,
                    especially when said work is done in private repositories.
                </SectionParagraph>
                <SectionParagraph>
                    Here I will try to present examples of some of the things
                    I've build before. This whole website is publicly available
                    on Github, so feel free to check out the source code too!
                </SectionParagraph>
            </div>
            <WorkExample header={"Form management"}>
                <FormManagement />
            </WorkExample>
            <WorkExample header={"Navigation blocker"}>
                <NavigationBlockerExample />
            </WorkExample>
            <WorkExample header={"Drag and drop"}>
                <DragAndDrop />
            </WorkExample>
            <WorkExample header={"Request state handling"}>
                <RequestStateHandling />
            </WorkExample>
        </div>
    );
};

export default Work;
