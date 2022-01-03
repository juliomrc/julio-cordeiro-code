import { makeStyles } from "@material-ui/core/styles";
import { absolutePositionedFullContent } from "@resources/styles/commonStyles";

export const useAPIRequestStateStyles = makeStyles((theme) => {
    return {
        wrapper: absolutePositionedFullContent,
        alert: {
            padding: "10px",
            backgroundColor: theme.palette.warning.main,
            borderRadius: "6px",
        },
    };
});
