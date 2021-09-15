import { lazy } from "react";

export const AsyncJavascriptExercises = lazy(() => {
    return import(
        /* webpackChunkName: "javascript-exercises" */ "./JavascriptExercises"
    );
});
