import { useRef, useEffect, useState } from "react";
import Typed, { TypedOptions } from "typed.js";

export const useTypedAnimation = (options: TypedOptions = {}) => {
    const [reRenderCounter, setReRenderCounter] = useState(0);
    const el = useRef<HTMLSpanElement>(null);
    const typed = useRef<Typed>();

    useEffect(() => {
        typed.current = new Typed(el.current as Element, options);
        console.log(typed.current);
        setReRenderCounter(reRenderCounter + 1);

        return () => {
            typed.current?.destroy();
        };
    }, []);

    const pause = () => {
        typed.current?.stop();
    };

    const start = () => {
        typed.current?.start();
    };

    const reset = () => {
        typed.current?.reset();
    };

    return {
        domRef: el,
        animationHandlers: {
            pause,
            start,
            reset,
        },
    };
};
