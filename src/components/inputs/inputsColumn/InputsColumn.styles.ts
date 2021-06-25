import { makeStyles } from "@material-ui/core/styles";

export const useInputsColumnStyles = makeStyles(() => {
    return {
        inputsColumn: {
            display: "flex",
            flexDirection: "column",
            width: "100%",

            "& > *": {
                marginBottom: "20px",
            },
        },
    };
});
