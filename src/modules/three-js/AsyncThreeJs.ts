import { lazy } from "react";

export const AsyncThreeJS = lazy(() => {
    return import(/* webpackChunkName: "three-js" */ "./ThreeJS");
});
