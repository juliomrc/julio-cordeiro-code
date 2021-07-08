import { makeStyles } from "@material-ui/core";
import { centeredFullContent } from "@resources/styles/commonStyles";

export const useFetchExamplesStyles = makeStyles((theme) => ({
    container: {
        paddingTop: "10px",
        paddingBottom: "10px",
        marginTop: "10px",
        marginBottom: "10px",
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    buttons: {
        ...centeredFullContent,
        flexDirection: "row",
    },
    centeredFullContent,
}));
