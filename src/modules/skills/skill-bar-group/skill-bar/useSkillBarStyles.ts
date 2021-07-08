import { makeStyles } from "@material-ui/core";
import { centeredFullContent } from "@resources/styles/commonStyles";

export const useSkillBarStyles = makeStyles((theme) => ({
    skill: {
        display: "flex",
        width: "100%",
        marginBottom: "20px",
        color: "#fff",
    },
    name: {
        ...centeredFullContent,
        borderTopLeftRadius: "6px",
        borderBottomLeftRadius: "6px",
        width: "140px",
        backgroundColor: theme.palette.info.dark,
    },
    percentage: {
        ...centeredFullContent,
        width: "50px",
        padding: "4px",
        borderTopRightRadius: "6px",
        borderBottomRightRadius: "6px",
        // width: "20px",
        backgroundColor: theme.palette.background.paper,
    },
}));
