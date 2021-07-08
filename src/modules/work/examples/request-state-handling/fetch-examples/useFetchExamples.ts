import { useAPIRequestStateHandler } from "@components/api-request-sate-handler/use-api-request-state-handler";
import { useState } from "react";
import { fetchMock } from "./fetchMock";

export const useFetchExamples = () => {
    const [response, setResponse] = useState<string | null>(null);
    const { requestState, standardAPIRequestWrap } =
        useAPIRequestStateHandler();

    const handleQuickFetch = standardAPIRequestWrap(async () => {
        const response = await fetchMock(
            300,
            "This response was so fast, there was no need to show a loader",
        );
        setResponse(response);
    });

    const handleMediumDurationFetch = standardAPIRequestWrap(async () => {
        const response = await fetchMock(
            3000,
            "This response was slower so a loader was necessary",
        );
        setResponse(response);
    });

    const handleFetchWithError = standardAPIRequestWrap(async () => {
        await fetchMock(
            3000,
            {},
            true,
            "Error! The api should return some error here. Or maybe just a 500 generic error message would be fine.",
        );
    });

    return {
        response,
        requestState,
        handleQuickFetch,
        handleMediumDurationFetch,
        handleFetchWithError,
    };
};
