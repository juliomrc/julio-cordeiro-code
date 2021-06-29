import { makeStyles } from "@material-ui/core";

export const useExpandCollapseButtonStyles = makeStyles(() => {
    return {
        expandIcon: {
            transition: "transform 0.2s",
        },
        isExpanded: {
            transform: "rotate(-180deg)",
        },
    };
});
