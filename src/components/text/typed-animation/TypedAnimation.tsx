import React from "react";
import { useTypedAnimationStyles } from "./useTypedAnimationStyles";

interface TypedAnimationProps {
    domRef: React.RefObject<HTMLSpanElement>;
}

export const TypedAnimation: React.FC<TypedAnimationProps> = ({ domRef }) => {
    const styles = useTypedAnimationStyles();

    return (
        <div className={styles.container}>
            <span ref={domRef} />
        </div>
    );
};
