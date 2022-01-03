import { makeStyles } from "@material-ui/core";
import {
    absolutePositionedFullContent,
    centeredFullContent,
} from "@resources/styles/commonStyles";
import { zIndexStack } from "@resources/styles/zIndexStack";

// TODO: tabbing over menu while it is hidden, need some kind of focus trap
export const useOverlayStyles = makeStyles((theme) => ({
    container: {
        ...centeredFullContent,
        ...absolutePositionedFullContent,
        zIndex: zIndexStack.overlay,
    },
    overlay: {
        ...absolutePositionedFullContent,
        zIndex: zIndexStack.overlay,
        opacity: 0.75,
        backgroundColor: theme.palette.background.default,
    },
    content: {
        zIndex: zIndexStack.overlayContent,
        margin: "auto",
        alignSelf: "center",
    },
}));
