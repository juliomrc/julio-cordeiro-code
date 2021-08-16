import { makeStyles } from "@material-ui/core";

export const useTodoConfigStyles = makeStyles(() => ({
    container: {
        position: "relative",
        margin: "auto",
        marginTop: "10px",
        maxWidth: "400px",
        padding: "10px",
        paddingRight: "48px",
    },
    closeButton: {
        position: "absolute",
        top: 0,
        right: 0,
    },
}));
