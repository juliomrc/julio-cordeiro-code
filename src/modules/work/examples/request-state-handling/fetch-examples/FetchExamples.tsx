import { APIRequestState } from "@components/api-request-sate-handler/api-request-state";
import { Button } from "@components/inputs/button";
import React from "react";
import { useFetchExamples } from "./useFetchExamples";

export const FetchExamples = () => {
    const fetchExamples = useFetchExamples();

    return (
        <>
            <APIRequestState requestState={fetchExamples.requestState} />
            <Button onClick={fetchExamples.handleQuickFetch}>
                This is a fast request
            </Button>
            <Button onClick={fetchExamples.handleMediumDurationFetch}>
                This is a medium duration request
            </Button>
            <Button onClick={fetchExamples.handleLongFetch}>
                This is a long request
            </Button>
            <Button onClick={fetchExamples.handleFetchWithError}>
                This request will throw an error
            </Button>
        </>
    );
};
