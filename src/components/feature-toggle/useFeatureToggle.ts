import { UseGetFeatureToggleProps } from "./FeatureToggleTypes";
import { useGetFeatureToggles } from "./useGetFeatureToggle";

export const useFeatureToggle = (props: UseGetFeatureToggleProps) => {
    const { getIsFeatureAvailable } = useGetFeatureToggles();

    const isFeatureAvailable = getIsFeatureAvailable(props);

    return isFeatureAvailable;
};
