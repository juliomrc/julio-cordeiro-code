import React from "react";
import classNames from "classnames";
import { useOverlayStyles } from "./useOverlayStyles";

interface OverlayProps {
    show?: boolean;
    className?: string;
}

export const Overlay: React.FC<OverlayProps> = ({
    children,
    show,
    className,
}) => {
    const cssClasses = useOverlayStyles();

    if (!show) {
        return null;
    }

    return (
        <div className={classNames(cssClasses.container, className)}>
            <div className={cssClasses.overlay} />
            <div className={cssClasses.content}>{children}</div>
        </div>
    );
};

Overlay.defaultProps = {
    show: true,
};
