import React from "react";
import { render } from "@testing-library/react";
import { FeatureToggle } from "../FeatureToggle";
import { FeatureName, PremiumFeatureLevels } from "../FeatureToggleTypes";
import { AvailableFeaturesContextProvider } from "../AvailableFeaturesContext";

describe("FeatureToggle", () => {
    const fallback = "This is a fallback component";
    const featureProtectedComponent = "This is protected by a feature toggle";

    it("Should render fallback when feature is not available and fallback is provided", () => {
        const { container } = render(
            <AvailableFeaturesContextProvider
                featureDefinitions={{ featureExample1: false }}
            >
                <FeatureToggle
                    fallback={fallback}
                    featureName={FeatureName.FeatureExample1}
                >
                    {featureProtectedComponent}
                </FeatureToggle>
            </AvailableFeaturesContextProvider>,
        );

        expect(container.textContent).toBe(fallback);
    });

    it("Should render nothing when feature is disabled and fallback is not present", () => {
        const { container } = render(
            <AvailableFeaturesContextProvider
                featureDefinitions={{ featureExample1: false }}
            >
                <FeatureToggle featureName={FeatureName.FeatureExample1}>
                    {featureProtectedComponent}
                </FeatureToggle>
            </AvailableFeaturesContextProvider>,
        );

        expect(container).toBeEmptyDOMElement();
    });

    it("Should render the feature when the featureName and featureValue match", () => {
        const { container } = render(
            <AvailableFeaturesContextProvider
                featureDefinitions={{ featureExample1: true }}
            >
                <FeatureToggle featureName={FeatureName.FeatureExample1}>
                    {featureProtectedComponent}
                </FeatureToggle>
            </AvailableFeaturesContextProvider>,
        );

        const { container: PremiumFeatureContainer } = render(
            <AvailableFeaturesContextProvider
                featureDefinitions={{
                    maybeAPremiumFeature: PremiumFeatureLevels.Advanced,
                }}
            >
                <FeatureToggle
                    featureName={FeatureName.MaybeAPremiumFeature}
                    featureValue={PremiumFeatureLevels.Advanced}
                >
                    {featureProtectedComponent}
                </FeatureToggle>
            </AvailableFeaturesContextProvider>,
        );

        expect(container.textContent).toBe(featureProtectedComponent);
        expect(PremiumFeatureContainer.textContent).toBe(
            featureProtectedComponent,
        );
    });
});
