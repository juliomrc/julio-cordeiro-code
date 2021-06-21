import { useEffect } from "react";

export const useAnimateAndRemovePreloader = () => {
    const minimumPreloaderTime = 1000;
    const animationDuration = 500;

    useEffect(() => {
        let removePreloaderTimeout: number;

        const animatePreloaderTimeout = window.setTimeout(() => {
            const preloader = document.getElementById("preloader");
            preloader?.classList.add("exit-animation");

            removePreloaderTimeout = window.setTimeout(() => {
                preloader?.remove();
            }, animationDuration);
        }, minimumPreloaderTime);

        return () => {
            window.clearTimeout(animatePreloaderTimeout);
            window.clearTimeout(removePreloaderTimeout);
        };
    }, []);
};
