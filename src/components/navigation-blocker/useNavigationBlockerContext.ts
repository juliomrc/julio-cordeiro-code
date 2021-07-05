import { generateUniqueRandomId } from "@components/generateUniqueRandomId";
import { useContext, useEffect, useRef } from "react";
import { NavigationBlockerContext } from "./NavigationBlockerContext";

export const useNavigationBlockerContext = (onSaveChanges?: () => void) => {
    const navigationBlockerContext = useContext(NavigationBlockerContext);
    const uniqueId = useRef(
        generateUniqueRandomId("navigationBlockerSubscription-"),
    );

    const blockNavigation = () => {
        navigationBlockerContext.subscribe({
            id: uniqueId.current,
            onSaveChanges,
        });
    };

    const unBlockNavigation = () => {
        navigationBlockerContext.unsubscribe(uniqueId.current);
    };

    useEffect(() => {
        return unBlockNavigation;
    }, []);

    return {
        blockNavigation,
        unBlockNavigation,
    };
};
