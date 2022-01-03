import { CSSProperties } from "@material-ui/core/styles/withStyles";

export const centeredFullContent: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
};

export const absolutePositionedFullContent: CSSProperties = {
    position: "absolute",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
};
