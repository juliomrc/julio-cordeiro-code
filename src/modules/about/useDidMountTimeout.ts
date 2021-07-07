import { useEffect } from "react";

export const useDidMountTimeout = (callback: () => void, duration: number) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            callback();
        }, duration);

        return () => {
            clearTimeout(timeout);
        };
    }, []);
};
