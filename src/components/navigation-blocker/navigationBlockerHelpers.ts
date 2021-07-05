import {
    NavigationBlockerSubscription,
    NavigationBlockerSubscriptions,
} from "./NavigationBlockerTypes";

export const runAllSaveChangesCallbacks = async (
    navigationBlockerSubscriptions: NavigationBlockerSubscriptions,
) => {
    await Promise.all(
        navigationBlockerSubscriptions.map((subscription) => {
            if (subscription.onSaveChanges) {
                return subscription.onSaveChanges();
            }
        }),
    );
};

export const addSubscriptionIfNew = (
    newSubscription: NavigationBlockerSubscription,
    navigationBlockerSubscriptions: NavigationBlockerSubscriptions,
    setNavigationBlockerSubscriptions: React.Dispatch<
        React.SetStateAction<NavigationBlockerSubscriptions>
    >,
) => {
    const isAlreadySubscribed = navigationBlockerSubscriptions.find(
        (currentSubscription) => {
            return currentSubscription.id === newSubscription.id;
        },
    );

    if (!isAlreadySubscribed) {
        setNavigationBlockerSubscriptions((currentSubscriptions) => {
            return [...currentSubscriptions, newSubscription];
        });
    }
};

export const removeSubscriptionsWithId = (
    uniqueId: string,
    setNavigationBlockerSubscriptions: React.Dispatch<
        React.SetStateAction<NavigationBlockerSubscriptions>
    >,
) => {
    setNavigationBlockerSubscriptions((currentSubscriptions) => {
        return currentSubscriptions.filter((subscription) => {
            return subscription.id !== uniqueId;
        });
    });
};
