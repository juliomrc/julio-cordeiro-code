import { makeStyles } from "@material-ui/core";

export const useHomepageStyles = makeStyles(() => ({
    centeredContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
}));
