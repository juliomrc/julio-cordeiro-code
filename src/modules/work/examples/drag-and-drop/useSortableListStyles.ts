import { makeStyles } from "@material-ui/core";
import { centeredFullContent } from "@resources/styles/commonStyles";

export const useSortableListStyles = makeStyles(() => ({
    container: {
        marginTop: "10px",
    },
    item: {
        padding: "10px",
        ...centeredFullContent,
    },
}));
