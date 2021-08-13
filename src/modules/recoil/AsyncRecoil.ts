import { lazy } from "react";

export const AsyncRecoil = lazy(() => {
    return import(/* webpackChunkName: "recoil" */ "./Recoil");
});
