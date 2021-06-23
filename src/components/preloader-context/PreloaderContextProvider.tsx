import React, { useState } from "react";
import { PreloaderContext } from "./PreloaderContext";
import { useAnimateAndRemovePreloader } from "./useAnimateAndRemovePreloader";

export const PreloaderContextProvider: React.FC = ({ children }) => {
    const [isShowing, setIsShowing] = useState(true);

    const handlePreloaderRemoved = () => {
        setIsShowing(false);
    };

    useAnimateAndRemovePreloader(handlePreloaderRemoved);

    return (
        <PreloaderContext.Provider value={{ isShowingPreloader: isShowing }}>
            {children}
        </PreloaderContext.Provider>
    );
};
