import { lazy } from "react";

export const AsyncSkills = lazy(() => {
    return import(/* webpackChunkName: "skills" */ "./Skills");
});
