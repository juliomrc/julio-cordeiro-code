import { lazy } from "react";

export const AsyncAbout = lazy(() => {
    return import(/* webpackChunkName: "about" */ "./About");
});
