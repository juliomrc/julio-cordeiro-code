import { makeStyles } from "@material-ui/core";
import { centeredFullContent } from "@resources/styles/commonStyles";

export const useSkillBarGroupStyles = makeStyles(() => ({
    barGroup: {
        ...centeredFullContent,
        maxWidth: "450px",
    },
    header: {
        marginBottom: "20px",
        fontWeight: "lighter",
        fontSize: "2rem",
    },
}));
