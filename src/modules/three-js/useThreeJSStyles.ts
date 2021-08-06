import { makeStyles } from "@material-ui/core";
import { centeredFullContent } from "@resources/styles/commonStyles";

export const useThreeJSStyles = makeStyles((theme) => ({
    canvas: {
        position: "fixed",
        top: 0,
        left: 0,
    },
    content: {
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        maxWidth: "1080px",
        height: "100%",

        [theme.breakpoints.up("sm")]: {
            ...centeredFullContent,
        },
    },
    underContent: {
        zIndex: -1,
    },
    buttonOverCanvas: {
        margin: "20px",
        zIndex: 2,
        color: "white !important",
    },
}));
