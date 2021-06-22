import { makeStyles } from "@material-ui/core";

export const useMyselfStyles = makeStyles((theme) => ({
    myself: {
        display: "flex",
        alignItems: "center",

        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
}));
