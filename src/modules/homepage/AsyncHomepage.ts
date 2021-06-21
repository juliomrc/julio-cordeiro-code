import { lazy } from "react";

export const AsyncHomepage = lazy(() => {
    return import(/* webpackChunkName: "homepage" */ "./Homepage");
});
