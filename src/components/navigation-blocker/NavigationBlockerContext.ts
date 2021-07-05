import React from "react";
import { NavigationBlockerContextType } from "./NavigationBlockerTypes";

export const NavigationBlockerContext =
    React.createContext<NavigationBlockerContextType>({
        subscribe: () => {
            return null;
        },
        unsubscribe: () => {
            return null;
        },
    });
