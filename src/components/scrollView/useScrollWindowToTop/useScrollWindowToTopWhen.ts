import { useEffect } from "react";
import { useScrollWindowToTop } from "./useScrollWindowToTop";

export const useScrollWindowToTopWhen = (
    when: boolean,
    options?: ScrollIntoViewOptions,
): void => {
    const scrollWindowToTop = useScrollWindowToTop(options);
    useEffect(() => {
        if (when) {
            scrollWindowToTop();
        }
    }, [when]);
};
