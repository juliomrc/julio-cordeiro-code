import { makeStyles } from "@material-ui/core";

export const useMyPhotoStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: theme.spacing(3),
    },
    photo: {
        borderRadius: "50%",
    },
    description: {
        textAlign: "center",
    },
}));
