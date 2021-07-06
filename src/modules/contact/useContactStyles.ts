import { makeStyles } from "@material-ui/core";
import { centeredFullContent } from "@resources/styles/commonStyles";

export const useContactStyles = makeStyles((theme) => ({
    centeredFullContent,
    firstInput: {
        marginTop: theme.spacing(2),
    },
    formContainer: {
        marginTop: theme.spacing(2),
        minWidth: "300px",
        maxWidth: "600px",
        width: "100%",
        textAlign: "justify",
    },
}));
