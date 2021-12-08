import { useAvailableFeaturesContext } from "./AvailableFeaturesContext";
import { UseGetFeatureToggleProps } from "./FeatureToggleTypes";

export const useGetFeatureToggles = () => {
    const availableFeatures = useAvailableFeaturesContext();

    const getIsFeatureAvailable = ({
        featureName,
        featureValue = true,
    }: UseGetFeatureToggleProps) => {
        if (!availableFeatures) {
            return false;
        }

        return availableFeatures[featureName] === featureValue;
    };

    return {
        getIsFeatureAvailable,
    };
};
