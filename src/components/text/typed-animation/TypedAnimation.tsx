import React, { useRef, useEffect } from "react";
import Typed, { TypedOptions } from "typed.js";

export const TypedAnimation: React.FC<TypedOptions> = (props) => {
    // Create reference to store the DOM element containing the animation
    const el = useRef<HTMLSpanElement>(null);
    // Create reference to store the Typed instance itself
    const typed = useRef<Typed>();

    useEffect(() => {
        typed.current = new Typed(el.current as Element, {
            ...props,
        });

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current?.destroy();
        };
    }, []);

    return (
        <div className="wrap">
            <div className="type-wrap">
                <span style={{ whiteSpace: "pre" }} ref={el} />
            </div>
        </div>
    );
};

TypedAnimation.defaultProps = {
    typeSpeed: 50,
    backSpeed: 50,
};
