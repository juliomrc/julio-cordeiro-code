import { useRef } from "react";
import { defaultWindowScrollOptions } from "../defaultWindowScrollOptions";

export const useScrollElementIntoView = <TElement extends HTMLElement>(
    options?: ScrollIntoViewOptions,
) => {
    const elementToScrollToRef = useRef<TElement>(null);

    const scrollElementIntoView = () => {
        if (elementToScrollToRef.current) {
            elementToScrollToRef.current.scrollIntoView({
                ...defaultWindowScrollOptions,
                ...options,
            });
        }
    };

    return { elementToScrollToRef, scrollElementIntoView };
};
