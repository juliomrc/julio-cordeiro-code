import { useState } from "react";
import {
    NavigationBlockerSubscription,
    NavigationBlockerSubscriptions,
} from "./NavigationBlockerTypes";
import {
    addSubscriptionIfNew,
    removeSubscriptionsWithId,
} from "./navigationBlockerHelpers";

export const useNavigationBlockerSubscriptions = () => {
    const [navigationBlockerSubscriptions, setNavigationBlockerSubscriptions] =
        useState<NavigationBlockerSubscriptions>([]);
    const isNavigationBlocked = !!navigationBlockerSubscriptions.length;

    const subscribe = (newSubscription: NavigationBlockerSubscription) => {
        addSubscriptionIfNew(
            newSubscription,
            navigationBlockerSubscriptions,
            setNavigationBlockerSubscriptions,
        );
    };

    const unsubscribe = (uniqueId: string) => {
        removeSubscriptionsWithId(uniqueId, setNavigationBlockerSubscriptions);
    };

    const clearSubscriptions = () => {
        setNavigationBlockerSubscriptions([]);
    };

    return {
        isNavigationBlocked,
        navigationBlockerSubscriptions,
        subscribe,
        unsubscribe,
        clearSubscriptions,
    };
};
