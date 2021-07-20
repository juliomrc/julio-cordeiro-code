import { CircularLoader } from "@components/loaders/circular-loader";
import React, { lazy, Suspense, useEffect, useState } from "react";

export const ThreeJS = lazy(() => {
    return import(
        /* webpackPrefetch: true */ /* webpackChunkName: "three-js" */ "./ThreeJS"
    );
});

interface LazyThreeJSProps {
    shouldMount: boolean;
}

export const LazyThreeJS: React.FC<LazyThreeJSProps> = ({ shouldMount }) => {
    const [mountThreeJS, setMountThreeJS] = useState(false);

    useEffect(() => {
        if (shouldMount) {
            setMountThreeJS(true);
        }
    }, [shouldMount]);

    return (
        <Suspense fallback={<CircularLoader />}>
            {mountThreeJS && <ThreeJS />}
        </Suspense>
    );
};
