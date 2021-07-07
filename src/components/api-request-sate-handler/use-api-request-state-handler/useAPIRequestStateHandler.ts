import { useState } from "react";
import {
    APIRequestState,
    APIRequestStateAndHandler,
    APIResponseError,
} from "./UseAPIRequestStateHandlerTypes";

export const useAPIRequestStateHandler = () => {
    const [apiRequestState, setApiRequestState] = useState<APIRequestState>({});

    const handleStartLoading = () => {
        setApiRequestState({
            isLoading: true,
        });
    };

    const handleLoadingFinished = () => {
        setApiRequestState({
            isLoading: false,
        });
    };

    const handleCaughtException = (error: APIResponseError) => {
        setApiRequestState({
            isLoading: false,
            errors: [error],
        });
    };

    const handleClearState = () => {
        setApiRequestState({
            isLoading: false,
            errors: null,
        });
    };

    const standardAPIRequestWrap = (apiFetchFunction: () => Promise<void>) => {
        const standardWrappedRequest = async () => {
            try {
                handleStartLoading();
                await apiFetchFunction();
                handleLoadingFinished();
            } catch (exception) {
                handleCaughtException(exception);
            }
        };

        return standardWrappedRequest;
    };

    const requestState: APIRequestStateAndHandler = {
        ...apiRequestState,
        clearState: handleClearState,
    };

    return {
        requestState,
        standardAPIRequestWrap,
        requestStateHandlers: {
            onStartLoading: handleStartLoading,
            onFinishLoading: handleLoadingFinished,
            onExceptionCaught: handleCaughtException,
        },
    };
};
