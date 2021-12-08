import React, { useContext } from "react";
import { FeatureDefinitions } from "./FeatureToggleTypes";

interface AvailableFeaturesContextProps {
    featureDefinitions: Partial<FeatureDefinitions>;
}

const AvailableFeaturesContext = React.createContext<
    Partial<FeatureDefinitions>
>({});

export const useAvailableFeaturesContext = () => {
    const context = useContext(AvailableFeaturesContext);
    return context;
};

export const AvailableFeaturesContextProvider: React.FC<AvailableFeaturesContextProps> =
    ({ children, featureDefinitions }) => {
        return (
            <AvailableFeaturesContext.Provider value={featureDefinitions}>
                {children}
            </AvailableFeaturesContext.Provider>
        );
    };
