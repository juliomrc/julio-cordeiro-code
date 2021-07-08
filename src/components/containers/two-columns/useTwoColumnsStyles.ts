import { makeStyles, Theme } from "@material-ui/core/styles";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

export const useTwoColumnsStyles = (
    isSingleColumnMobile: boolean,
    breakpoint: Breakpoint,
) => {
    return makeStyles((theme: Theme) => {
        return {
            twoColumns: {
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",

                [theme.breakpoints.down(breakpoint)]: isSingleColumnMobile && {
                    flexDirection: "column",
                    width: "auto",
                },

                "& > *:first-child": {
                    marginRight: "15px",

                    [theme.breakpoints.down(breakpoint)]:
                        isSingleColumnMobile && {
                            marginRight: 0,
                        },
                },

                "& > *:nth-child(2)": {
                    marginLeft: "15px",

                    [theme.breakpoints.down(breakpoint)]:
                        isSingleColumnMobile && {
                            marginLeft: 0,
                        },
                },
            },
        };
    })();
};
