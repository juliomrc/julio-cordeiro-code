import React from "react";

interface PreloaderContext {
    isShowingPreloader: boolean;
}
export const PreloaderContext = React.createContext<PreloaderContext>({
    isShowingPreloader: true,
});
