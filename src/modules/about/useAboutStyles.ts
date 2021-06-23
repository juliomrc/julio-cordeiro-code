import { makeStyles } from "@material-ui/core";

export const useAboutStyles = makeStyles((theme) => {
    const stepperWidth = 150;
    const contentWidth = 1080;

    return {
        about: {
            display: "flex",
        },
        stepper: {
            position: "fixed",
            left: 0,
            width: stepperWidth,
        },
        content: {
            textAlign: "justify",
            [theme.breakpoints.down(contentWidth + 2 * stepperWidth)]: {
                marginLeft: stepperWidth,
            },
            flex: 1,
        },
    };
});
