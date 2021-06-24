import { makeStyles } from "@material-ui/core";

export const useQuickNavigationStyles = makeStyles((theme) => {
    return {
        container: {
            position: "absolute",
            padding: theme.spacing(1),
            zIndex: 1,
            top: 0,
            left: 0,
        },
        item: {
            padding: theme.spacing(1),
        },
    };
});
