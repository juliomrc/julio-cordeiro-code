import React, { useRef } from "react";
import { useDidUpdate } from "@components/lifecycle/use-did-update";
import { highlight } from "@resources/constants/animationPresets";
import { useRecoilValue } from "recoil";
import { shouldHighlightAtom } from "./shouldHighlightState";

export const ReRenderHighlight: React.FC = ({ children }) => {
    const shouldHighlight = useRecoilValue(shouldHighlightAtom);
    const containerRef = useRef<HTMLDivElement>(null);

    useDidUpdate(() => {
        if (shouldHighlight && containerRef.current) {
            containerRef.current.animate(
                highlight.keyframes,
                highlight.options,
            );
        }
    });

    return <div ref={containerRef}>{children}</div>;
};
