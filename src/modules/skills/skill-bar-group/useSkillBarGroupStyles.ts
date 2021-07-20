import { makeStyles } from "@material-ui/core";
import { centeredFullContent } from "@resources/styles/commonStyles";

export const useSkillBarGroupStyles = makeStyles(() => ({
    barGroup: {
        ...centeredFullContent,
        maxWidth: "450px",
        width: "100%",
    },
    header: {
        marginBottom: "20px",
        fontWeight: "lighter",
        fontSize: "2rem",
    },
}));
