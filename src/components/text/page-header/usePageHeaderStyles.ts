import { makeStyles } from "@material-ui/core";

export const usePageHeaderStyles = makeStyles((theme) => ({
    pageHeader: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),
        fontSize: "3rem",
    },
}));
