import { makeStyles } from "@material-ui/core";
import { centeredFullContent } from "@resources/styles/commonStyles";

export const useWorkStyles = makeStyles(() => ({
    centeredFullContent,
    description: {
        textAlign: "justify",
        marginBottom: "10px",
    },
}));
