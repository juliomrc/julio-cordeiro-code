import React, { Suspense } from "react";
import { ErrorBoundary } from "@components/error-boundary";
import { FallbackLoader } from "./FallbackLoader";

export const LazyRouteWrapper: React.FC = ({ children }) => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<FallbackLoader />}>{children}</Suspense>
        </ErrorBoundary>
    );
};
