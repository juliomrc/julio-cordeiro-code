import { makeStyles } from "@material-ui/core";

export const useGenericFormStyles = makeStyles((theme) => ({
    form: {
        padding: "10px",
        borderTop: `1px solid ${theme.palette.divider}`,
    },
}));
