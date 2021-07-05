export interface NavigationBlockerContextType {
    subscribe: (subscription: NavigationBlockerSubscription) => void;
    unsubscribe: (subscriptionId: string) => void;
}

export interface NavigationBlockerSubscription {
    id: string;
    onSaveChanges?: () => void;
}

export type NavigationBlockerSubscriptions = NavigationBlockerSubscription[];

export interface NavigationBlockerPromptProps {
    isNavigationBlocked: boolean;
    onNavigate: () => void;
    onSaveChanges: () => Promise<void>;
}
