import { makeStyles } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { centeredFullContent } from "@resources/styles/commonStyles";

export const useProgressStyles = makeStyles((theme) => {
    const borderRadius = "6px";
    const common: CSSProperties = {
        height: "45px",
    };
    return {
        progressContainer: {
            ...common,
            backgroundColor: theme.palette.background.paper,
            position: "relative",
            width: "100%",
        },
        progress: {
            ...common,
            ...centeredFullContent,
            borderTopRightRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
            backgroundColor: theme.palette.info.dark,
            position: "absolute",
            top: 0,
            left: 0,
            width: 0,
        },
        hoverProgress: {
            width: "100%",
            borderRadius,
            backgroundColor: theme.palette.info.light,
        },
    };
});
