import { makeStyles } from "@material-ui/core";

export const useMenuStyles = makeStyles((theme) => {
    const footerHeight = 56;

    return {
        burger: {
            position: "fixed",
            top: 0,
            right: 0,
            zIndex: 2,
            padding: theme.spacing(1),
        },
        menuContainer: {
            position: "fixed",
            height: `calc(100vh - ${footerHeight}px)`,
            top: "-100vh",
            left: 0,
            zIndex: 1,
            transition: "top 0.5s",
            width: "100vw",
            padding: theme.spacing(1),
            backgroundColor: theme.palette.background.paper,
        },
        openMenu: {
            top: 0,
        },
        menuItems: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",
        },
        bottomNavigation: {
            position: "fixed",
            height: footerHeight,
            bottom: `-${footerHeight}px`,
            transition: "bottom 0.5s",
        },
        openNavigation: {
            bottom: 0,
        },
    };
});
