import React from "react";
import { FeatureToggleProps } from "./FeatureToggleTypes";
import { useFeatureToggle } from "./useFeatureToggle";

export const FeatureToggle: React.FC<FeatureToggleProps> = ({
    children,
    fallback,
    ...featureToggleProps
}) => {
    const isFeatureAvailable = useFeatureToggle(featureToggleProps);

    if (isFeatureAvailable) {
        return <>{children}</>;
    }

    return fallback ? <>{fallback}</> : null;
};
