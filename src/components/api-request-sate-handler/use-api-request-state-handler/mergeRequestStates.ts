import {
    APIRequestStateAndHandler,
    APIResponseError,
} from "./UseAPIRequestStateHandlerTypes";

export const mergeAPIRequestStates = (
    ...states: APIRequestStateAndHandler[]
): APIRequestStateAndHandler => {
    const initialState: APIRequestStateAndHandler = {
        clearState: () => null,
        errors: [],
    };

    const mergedState = states.reduce((accumulatedState, currentState) => {
        const handleClearState = () => {
            accumulatedState.clearState();
            currentState.clearState();
        };

        let errors = accumulatedState.errors;
        if (currentState.errors) {
            errors = [
                ...(accumulatedState.errors as APIResponseError[]),
                ...currentState.errors,
            ];
        }

        return {
            isLoading: accumulatedState.isLoading || currentState.isLoading,
            errors,
            clearState: handleClearState,
        };
    }, initialState);

    return mergedState;
};
