import { makeStyles } from "@material-ui/core/styles";
import { zIndexStack } from "@resources/styles/zIndexStack";

export const useAPIRequestStateStyles = makeStyles((theme) => {
    return {
        apiRequestState: {
            position: "absolute",
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignContent: "center",
            zIndex: 1,
        },
        overlay: {
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            opacity: 0.75,
            backgroundColor: theme.palette.background.default,
            zIndex: zIndexStack.requestStateOverlay,
        },
        wrapper: {
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
        },
        content: {
            zIndex: zIndexStack.requestStateContent,
            margin: "auto",
            alignSelf: "center",
        },
        alert: {
            padding: "10px",
            backgroundColor: theme.palette.warning.main,
            borderRadius: "6px",
        },
    };
});
