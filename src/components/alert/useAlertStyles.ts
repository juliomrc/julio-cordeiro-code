import { makeStyles } from "@material-ui/core";

export const useAlertStyles = makeStyles((theme) => ({
    alert: {
        position: "relative",
        padding: "20px",
        backgroundColor: theme.palette.warning.main,
        borderRadius: "6px",
    },
    closeIcon: {
        position: "absolute",
        height: "20px",
        width: "20px",
        top: 0,
        right: 0,
    },
}));
