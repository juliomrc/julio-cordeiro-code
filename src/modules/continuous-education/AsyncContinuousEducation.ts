import { lazy } from "react";

export const AsyncContinuousEducation = lazy(() => {
    return import(
        /* webpackChunkName: "continuous-education" */ "./ContinuousEducation"
    );
});
