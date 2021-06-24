import { ThemeSwitch } from "@components/theme/ThemeSwitch";
import classnames from "classnames";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { BottomNavigation } from "./bottom-navigation";
import { MenuItems } from "./MenuItems";
import { useMenuStyles } from "./useMenuStyles";

export const Menu: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    const handleCloseMenu = () => {
        setOpen(false);
    };

    const styles = useMenuStyles();
    return (
        <header>
            <div className={styles.burger}>
                <Hamburger
                    label="Toggle menu"
                    rounded
                    toggled={isOpen}
                    toggle={setOpen}
                />
            </div>
            <div
                className={classnames(
                    styles.menuContainer,
                    isOpen && styles.openMenu,
                )}
            >
                <ThemeSwitch />
                <div className={styles.menuItems}>
                    <MenuItems />
                </div>
                <BottomNavigation
                    onChangeNavigation={handleCloseMenu}
                    className={classnames(
                        styles.bottomNavigation,
                        isOpen && styles.openNavigation,
                    )}
                />
            </div>
        </header>
    );
};
