import React, { Suspense } from "react";
import { ErrorBoundary } from "@components/error-boundary";

export const LazyRouteWrapper: React.FC = ({ children }) => {
    return (
        <ErrorBoundary>
            <Suspense fallback={null}>{children}</Suspense>
        </ErrorBoundary>
    );
};
