import { makeStyles } from "@material-ui/core";

export const useCommonStyles = makeStyles(() => ({
    centeredFullContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
}));
