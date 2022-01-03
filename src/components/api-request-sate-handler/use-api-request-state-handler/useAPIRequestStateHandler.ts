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

    const standardAPIRequestWrap = <TArgs>(
        apiFetchFunction: (...args: TArgs[]) => Promise<void>,
    ) => {
        const standardWrappedRequest = async (...args: TArgs[]) => {
            try {
                handleStartLoading();
                await apiFetchFunction(...args);
                handleLoadingFinished();
            } catch (exception) {
                handleCaughtException(exception as APIResponseError);
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
