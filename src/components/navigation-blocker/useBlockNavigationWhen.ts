import { useEffect } from "react";
import { useNavigationBlockerContext } from "./useNavigationBlockerContext";

export const useBlockNavigationWhen = (
    when: boolean,
    onSaveChanges?: () => void,
) => {
    const navigationBlockerContext = useNavigationBlockerContext(onSaveChanges);

    useEffect(() => {
        if (when === null || when === undefined) {
            return;
        }

        if (when) {
            navigationBlockerContext.blockNavigation();
        } else {
            navigationBlockerContext.unBlockNavigation();
        }
    }, [when]);
};
