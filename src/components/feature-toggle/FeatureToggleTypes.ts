export enum FeatureName {
    FeatureExample1 = "featureExample1",
    MaybeAPremiumFeature = "maybeAPremiumFeature",
}

export enum PremiumFeatureLevels {
    Basic = "basic",
    Advanced = "advanced",
    Premium = "premium",
}

export interface FeatureDefinitions {
    [FeatureName.FeatureExample1]: boolean;
    [FeatureName.MaybeAPremiumFeature]: PremiumFeatureLevels;
}

interface ToggledFeatureDefinition {
    featureName: keyof FeatureDefinitions;
    featureValue?: FeatureDefinitions[keyof FeatureDefinitions];
}

export type UseGetFeatureToggleProps = ToggledFeatureDefinition;
export interface FeatureToggleProps extends ToggledFeatureDefinition {
    fallback?: React.ReactNode;
}
