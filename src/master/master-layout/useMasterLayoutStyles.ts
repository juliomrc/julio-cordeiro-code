import { makeStyles } from "@material-ui/core";

export const useMasterLayoutStyles = makeStyles((theme) => {
    return {
        root: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            display: "flex",
            minHeight: "100%",
        },
        websiteContent: {
            position: "relative",
            display: "flex",
            flex: 1,
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "center",
            padding: theme.spacing(4),
            maxWidth: "1080px",
            width: "100%",
        },
    };
});
