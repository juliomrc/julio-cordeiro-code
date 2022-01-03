import React, { useEffect } from "react";
import { Presets } from "react-component-transition";
import { Alert } from "@components/alert";
import { useAPIRequestStateStyles } from "./useAPIRequestStateStyles";
import { APIRequestStateProps } from "./APIRequestStateTypes";
import { useDelayShowingRequestState } from "./useDelayShowingRequestState";
import { APIRequestStateAndHandler } from "../use-api-request-state-handler";
import { CircularLoader } from "@components/loaders/circular-loader";
import { Overlay } from "@components/overlay";

export const APIRequestState: React.FC<APIRequestStateProps> = ({
    requestState = {} as APIRequestStateAndHandler,
    className,
}) => {
    const { clearState, errors, isLoading } = requestState;

    useEffect(() => {
        return () => {
            if ((errors || isLoading) && clearState) {
                clearState();
            }
        };
    }, []);

    const showRequestState = useDelayShowingRequestState(requestState);
    const cssClasses = useAPIRequestStateStyles();

    return (
        <Presets.TransitionFade className={cssClasses.wrapper}>
            {showRequestState && (
                <Overlay className={className}>
                    <>
                        {errors && (
                            <Alert onClose={clearState}>
                                {errors.map((error, index) => (
                                    <div key={index}>{error}</div>
                                ))}
                            </Alert>
                        )}
                        {isLoading && <CircularLoader />}
                    </>
                </Overlay>
            )}
        </Presets.TransitionFade>
    );
};
