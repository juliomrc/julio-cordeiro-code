import { useTheme, useMediaQuery } from "@material-ui/core";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

export const useIsViewPortSmallerThan = (
    viewportThreshold: number | Breakpoint,
) => {
    const th = useTheme();
    const isSmallerThanThreshold = useMediaQuery(
        th.breakpoints.down(viewportThreshold),
    );

    return isSmallerThanThreshold;
};
