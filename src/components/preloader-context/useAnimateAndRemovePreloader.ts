import { useEffect } from "react";

export const useAnimateAndRemovePreloader = (
    onPreloaderRemoved: () => void,
) => {
    const minimumPreloaderTime = 1000;
    const animationDuration = 500;

    useEffect(() => {
        let removePreloaderTimeout: number;

        const animatePreloaderTimeout = window.setTimeout(() => {
            const preloader = document.getElementById("preloader");
            preloader?.classList.remove("ripple");
            preloader?.classList.add("exit-animation");

            removePreloaderTimeout = window.setTimeout(() => {
                preloader?.remove();
                onPreloaderRemoved();
            }, animationDuration);
        }, minimumPreloaderTime);

        return () => {
            window.clearTimeout(animatePreloaderTimeout);
            window.clearTimeout(removePreloaderTimeout);
        };
    }, []);
};
