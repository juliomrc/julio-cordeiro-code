import { APIRequestState } from "@components/api-request-sate-handler/api-request-state";
import { Button } from "@components/inputs/button";
import { SectionParagraph } from "@components/text/section-paragraph";
import React from "react";
import { Presets } from "react-component-transition";
import { useFetchExamples } from "./useFetchExamples";
import { useFetchExamplesStyles } from "./useFetchExamplesStyles";

export const FetchExamples = () => {
    const fetchExamples = useFetchExamples();

    const styles = useFetchExamplesStyles();

    return (
        <div className={styles.container}>
            <div className={styles.buttons}>
                <APIRequestState requestState={fetchExamples.requestState} />
                <Button onClick={fetchExamples.handleQuickFetch}>
                    This is a fast request
                </Button>
                <Button onClick={fetchExamples.handleMediumDurationFetch}>
                    This is a medium duration request
                </Button>
                <Button onClick={fetchExamples.handleFetchWithError}>
                    This request will throw an error
                </Button>
            </div>
            <Presets.TransitionFade
                animateOnMount
                className={styles.centeredFullContent}
            >
                <SectionParagraph key={fetchExamples.response}>
                    {fetchExamples.response && fetchExamples.response}
                </SectionParagraph>
            </Presets.TransitionFade>
        </div>
    );
};
