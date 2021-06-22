import { makeStyles } from "@material-ui/core";

export const useMasterLayoutStyles = makeStyles((theme) => {
    const headerHeight = 50;
    const footerHeight = 56;

    return {
        root: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            display: "flex",
            minHeight: "100%",
            flexDirection: "column",
        },
        header: {
            position: "fixed",
            top: 0,
            width: "100%",
            height: headerHeight,
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
            marginTop: headerHeight,
            marginBottom: footerHeight,
        },
        bottomNavigation: {
            position: "fixed",
            bottom: 0,
            height: footerHeight,
        },
    };
});
