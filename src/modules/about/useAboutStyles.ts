import { makeStyles } from "@material-ui/core";

export const useAboutStyles = makeStyles((theme) => {
    const stepperWidth = 190;
    const contentWidth = 1080;

    return {
        about: {
            display: "flex",
        },
        stepper: {
            position: "fixed",
            left: 0,
            width: stepperWidth,
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",

            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
        content: {
            textAlign: "justify",
            [theme.breakpoints.down(contentWidth + 2 * stepperWidth)]: {
                marginLeft: stepperWidth,
            },
            [theme.breakpoints.down("sm")]: {
                marginLeft: "auto",
            },
            flex: 1,
        },
    };
});
