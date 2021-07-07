import React from "react";

interface TypedAnimationProps {
    domRef: React.RefObject<HTMLSpanElement>;
}

export const TypedAnimation: React.FC<TypedAnimationProps> = ({ domRef }) => {
    return (
        <div className="wrap">
            <div className="type-wrap">
                <span style={{ whiteSpace: "pre" }} ref={domRef} />
            </div>
        </div>
    );
};
