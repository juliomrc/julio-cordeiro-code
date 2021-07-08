import { makeStyles } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

export const useProgressStyles = (
    percentage: number,
    duration = 3000,
    delay = 0,
) =>
    makeStyles((theme) => {
        const common: CSSProperties = {
            height: "30px",
            borderTopRightRadius: "6px",
            borderBottomRightRadius: "6px",
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
                backgroundColor: theme.palette.info.dark,
                position: "absolute",
                top: 0,
                left: 0,
                animation: `$fill ${duration}ms ${theme.transitions.easing.easeInOut} forwards`,
                animationDelay: `${delay}ms`,
            },
            "@keyframes fill": {
                "0%": {
                    width: 0,
                    opacity: 0,
                },
                "100%": {
                    width: `${percentage}%`,
                    opacity: 1,
                },
            },
        };
    })();
