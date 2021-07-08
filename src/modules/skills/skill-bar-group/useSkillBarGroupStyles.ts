import { makeStyles } from "@material-ui/core";
import { centeredFullContent } from "@resources/styles/commonStyles";

export const useSkillBarGroupStyles = makeStyles(() => ({
    barGroup: {
        ...centeredFullContent,
        maxWidth: "450px",
        minWidth: "400px",
    },
    header: {
        marginBottom: "20px",
        textDecoration: "underline",
        fontWeight: "lighter",
    },
}));
