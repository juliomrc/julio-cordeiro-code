import { useEffect, useRef } from "react";

export const useDidUpdate = (
    effect: React.EffectCallback,
    deps?: React.DependencyList,
) => {
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
        } else {
            return effect();
        }
    }, deps);
};
