import React from "react";

export const Image: React.FC<
    React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    >
> = (props) => {
    return <img {...props} />;
};
