import { lazy } from "react";

export const AsyncNoMatch = lazy(() => {
    return import(/* webpackChunkName: "no-match" */ "./NoMatch");
});
