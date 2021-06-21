import { useEffect } from "react";
import { useScrollElementIntoView } from "./useScrollElementIntoView";

export const useScrollElementIntoViewWhen = <TElement extends HTMLElement>(
    when: boolean,
    options?: ScrollIntoViewOptions,
): React.RefObject<TElement> => {
    const { elementToScrollToRef, scrollElementIntoView } =
        useScrollElementIntoView<TElement>(options);

    useEffect(() => {
        if (when) {
            scrollElementIntoView();
        }
    }, [when]);

    return elementToScrollToRef;
};
