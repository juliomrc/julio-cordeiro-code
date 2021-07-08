import React from "react";
import clsx from "clsx";
import { useTwoColumnsStyles } from "./useTwoColumnsStyles";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

export interface TwoColumnsProps {
    className?: string;
    singleColumnMobile?: boolean;
    breakpoint?: Breakpoint;
}

export const TwoColumns: React.FC<TwoColumnsProps> = ({
    children,
    className,
    singleColumnMobile,
    breakpoint,
}) => {
    const cssClasses = useTwoColumnsStyles(
        singleColumnMobile as boolean,
        breakpoint as Breakpoint,
    );

    return (
        <div className={clsx(cssClasses.twoColumns, className)}>{children}</div>
    );
};

TwoColumns.defaultProps = {
    singleColumnMobile: false,
    breakpoint: "md",
};
