import { defaultWindowScrollOptions } from "../defaultWindowScrollOptions";

export const useScrollWindowToTop = (options?: ScrollIntoViewOptions) => {
    const scrollWindowToTop = () => {
        window.scrollTo({
            top: 0,
            ...defaultWindowScrollOptions,
            ...options,
        });
    };

    return scrollWindowToTop;
};
