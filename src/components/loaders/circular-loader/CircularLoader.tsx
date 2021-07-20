import React from "react";
import { CircularProgress, CircularProgressProps } from "@material-ui/core";

export const CircularLoader: React.FC<CircularProgressProps> = (props) => {
    return <CircularProgress {...props} />;
};
