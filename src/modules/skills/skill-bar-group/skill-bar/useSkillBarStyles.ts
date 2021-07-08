import { makeStyles } from "@material-ui/core";
import { centeredFullContent } from "@resources/styles/commonStyles";

export const useSkillBarStyles = makeStyles((theme) => ({
    skill: {
        display: "flex",
        width: "100%",
        marginBottom: "20px",
    },
    name: {
        ...centeredFullContent,
        borderTopLeftRadius: "6px",
        borderBottomLeftRadius: "6px",
        width: "130px",
        backgroundColor: theme.palette.info.dark,
    },
}));
