import { makeStyles } from "@material-ui/core";

export const useQuickNavigationStyles = makeStyles((theme) => {
    return {
        item: {
            whiteSpace: "nowrap",
        },
        itemText: {
            padding: theme.spacing(1),
        },
        contentOverThreeJs: {
            color: "white",
        },
    };
});
