import { makeStyles } from "@material-ui/core";

export const useMasterLayoutStyles = makeStyles(() => ({
    root: {
        overflow: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    websiteContent: {
        maxWidth: "1080px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    bottomNavigation: {
        display: "flex",
        alignSelf: "flex-end",
    },
}));
