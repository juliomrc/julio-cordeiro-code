import { lazy } from "react";

export const AsyncContact = lazy(() => {
    return import(/* webpackChunkName: "contact" */ "./Contact");
});
