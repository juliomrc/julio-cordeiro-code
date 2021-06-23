import { useContext } from "react";
import { PreloaderContext } from "./PreloaderContext";

export const useIsPreloaderActive = () => {
    const { isShowingPreloader } = useContext(PreloaderContext);

    return isShowingPreloader;
};
