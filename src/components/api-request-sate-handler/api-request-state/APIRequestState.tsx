import React, { useEffect } from "react";
import classNames from "classnames";
import { useAPIRequestStateStyles } from "./useAPIRequestStateStyles";
import { APIRequestStateProps } from "./APIRequestStateTypes";
import { useDelayShowingRequestState } from "./useDelayShowingRequestState";
import { Presets } from "react-component-transition";
import { CircularProgress } from "@material-ui/core";
import { Alert } from "@components/alert";
// TODO import
import { APIRequestStateAndHandler } from "../use-api-request-state-handler/UseAPIRequestStateHandlerTypes";

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
                <div
                    className={classNames(
                        cssClasses.apiRequestState,
                        className,
                    )}
                >
                    <div className={cssClasses.overlay} />
                    <div className={cssClasses.content}>
                        <>
                            {errors && (
                                <Alert onClose={clearState}>
                                    {errors.map((error, index) => (
                                        <div key={index}>{error}</div>
                                    ))}
                                </Alert>
                            )}
                            {isLoading && <CircularProgress />}
                        </>
                    </div>
                </div>
            )}
        </Presets.TransitionFade>
    );
};
