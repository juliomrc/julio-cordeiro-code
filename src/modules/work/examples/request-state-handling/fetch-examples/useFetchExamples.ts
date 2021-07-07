import { useAPIRequestStateHandler } from "@components/api-request-sate-handler/use-api-request-state-handler";
import { fetchMock } from "./fetchMock";

export const useFetchExamples = () => {
    const { requestState, standardAPIRequestWrap } =
        useAPIRequestStateHandler();

    const handleQuickFetch = standardAPIRequestWrap(async () => {
        await fetchMock(300);
    });

    const handleMediumDurationFetch = standardAPIRequestWrap(async () => {
        await fetchMock(2000);
    });

    const handleLongFetch = standardAPIRequestWrap(async () => {
        await fetchMock(10000);
    });

    const handleFetchWithError = standardAPIRequestWrap(async () => {
        await fetchMock(3000, {}, true, "Alert alert! Error error!");
    });

    return {
        requestState,
        handleQuickFetch,
        handleMediumDurationFetch,
        handleLongFetch,
        handleFetchWithError,
    };
};
