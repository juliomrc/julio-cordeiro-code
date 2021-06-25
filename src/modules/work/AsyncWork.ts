import { lazy } from "react";

export const AsyncWork = lazy(() => {
    return import(/* webpackChunkName: "work" */ "./Work");
});
