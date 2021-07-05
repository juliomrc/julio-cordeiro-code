import React from "react";
import { NavigationBlockerContext } from "./NavigationBlockerContext";
import { NavigationBlockerPrompt } from "./NavigationBlockerPrompt";
import { runAllSaveChangesCallbacks } from "./navigationBlockerHelpers";
import { useNavigationBlockerSubscriptions } from "./useNavigationBlockerSubscriptions";

export const NavigationBlockerContextProvider: React.FC = ({ children }) => {
    const {
        isNavigationBlocked,
        navigationBlockerSubscriptions,
        subscribe,
        unsubscribe,
        clearSubscriptions,
    } = useNavigationBlockerSubscriptions();

    const saveAllChanges = async () => {
        await runAllSaveChangesCallbacks(navigationBlockerSubscriptions);
    };

    return (
        <NavigationBlockerContext.Provider value={{ subscribe, unsubscribe }}>
            {children}
            <NavigationBlockerPrompt
                isNavigationBlocked={isNavigationBlocked}
                onNavigate={clearSubscriptions}
                onSaveChanges={saveAllChanges}
            />
        </NavigationBlockerContext.Provider>
    );
};
