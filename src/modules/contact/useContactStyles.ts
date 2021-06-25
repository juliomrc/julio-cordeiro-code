import { makeStyles } from "@material-ui/core";
import { useCommonStyles } from "@resources/styles/useCommonStyles";

export const useContactStyles = () => {
    const commonStyles = useCommonStyles();

    return {
        ...commonStyles,
        ...makeStyles((theme) => ({
            firstInput: {
                marginTop: theme.spacing(2),
            },
            formContainer: {
                marginTop: theme.spacing(2),
                minWidth: "300px",
                maxWidth: "600px",
                width: "100%",
                textAlign: "justify",
            },
        }))(),
    };
};
