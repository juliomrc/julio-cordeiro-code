import { makeStyles } from "@material-ui/core";

export const useMenuItemsStyles = makeStyles((theme) => {
    return {
        item: {
            padding: "10px 30px",
            borderRadius: "12px",
            transition: "0.5s background-color",
            backgroundColor: theme.palette.background.paper,

            "&:hover": {
                backgroundColor: theme.palette.background.default,
            },
        },
        itemText: {
            fontSize: "1.5rem",
        },
    };
});
