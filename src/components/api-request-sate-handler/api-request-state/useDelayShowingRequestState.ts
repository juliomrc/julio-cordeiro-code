import { useEffect, useState } from "react";
import { APIRequestState } from "../use-api-request-state-handler/UseAPIRequestStateHandlerTypes";

export const useDelayShowingRequestState = (requestState: APIRequestState) => {
    const hasOnGoingRequestState =
        requestState.isLoading || !!requestState.errors;
    const delayToShowRequestStateOnlyIfRequestIsTooLong = 400;

    const [showRequestState, setShowRequestState] = useState(
        hasOnGoingRequestState,
    );

    useEffect(() => {
        let timeOut: NodeJS.Timeout;
        if (hasOnGoingRequestState && !showRequestState) {
            timeOut = setTimeout(() => {
                setShowRequestState(true);
            }, delayToShowRequestStateOnlyIfRequestIsTooLong);
        } else if (!hasOnGoingRequestState) {
            setShowRequestState(false);
        }

        return () => {
            clearTimeout(timeOut);
        };
    }, [hasOnGoingRequestState]);

    return showRequestState;
};
