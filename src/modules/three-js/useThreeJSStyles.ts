import { makeStyles } from "@material-ui/core";
import { centeredFullContent } from "@resources/styles/commonStyles";

export const useThreeJSStyles = makeStyles(() => ({
    canvas: {
        position: "absolute",
        top: 0,
        left: 0,
    },
    text: {
        marginTop: "20px",
        maxWidth: "1080px",
        color: "white",
        ...centeredFullContent,
    },
    underContent: {
        zIndex: -1,
    },
    buttonOverCanvas: {
        zIndex: 2,
        color: "white !important",
    },
}));
