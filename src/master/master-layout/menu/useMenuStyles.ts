import { makeStyles } from "@material-ui/core";
import { zIndexStack } from "@resources/styles/zIndexStack";

export const useMenuStyles = makeStyles((theme) => {
    const footerHeight = 56;
    const burgerSize = 48;

    return {
        header: {
            padding: theme.spacing(1),
            width: "100%",
            minHeight: `${burgerSize}px`,
        },
        quickNavigation: {
            marginRight: `${burgerSize + 2}px`,
            display: "flex",
            flexWrap: "wrap",
        },
        burger: {
            position: "fixed",
            right: 0,
            top: 0,
            height: `${burgerSize}px`,
            zIndex: zIndexStack.menuBurgerIcon,
            borderRadius: "6px",
            transition: "background-color .5s",
        },
        burgerOverContentBackground: {
            backgroundColor: theme.palette.background.default,
        },
        menuContainer: {
            position: "fixed",
            height: `calc(100vh - ${footerHeight}px)`,
            top: "-100vh",
            left: 0,
            zIndex: zIndexStack.menuContainer,
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
            left: 0,
            bottom: `-${footerHeight}px`,
            transition: "bottom 0.5s",
        },
        openNavigation: {
            bottom: 0,
        },
    };
});
