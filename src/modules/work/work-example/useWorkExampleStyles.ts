import { makeStyles } from "@material-ui/core";

export const useWorkExampleStyles = makeStyles(() => {
    return {
        paper: {
            padding: "10px 15px",
            marginBottom: "10px",
            width: "100%",
            position: "relative",
        },
        header: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        content: {
            textAlign: "left",
        },
        exampleTitle: {
            textDecoration: "underline",
            marginRight: "20px",
        },
    };
});
