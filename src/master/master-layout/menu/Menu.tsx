import React, { useState } from "react";
import classnames from "classnames";
import Hamburger from "hamburger-react";
import { ThemeSwitch } from "@components/theme/ThemeSwitch";

import { BottomNavigation } from "./bottom-navigation";
import { QuickNavigation } from "./quick-navigation";
import { useMenuStyles } from "./useMenuStyles";
import { MenuItems } from "./menu-items";

export const Menu: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    const handleCloseMenu = () => {
        setOpen(false);
    };

    const styles = useMenuStyles();
    return (
        <header className={styles.header}>
            <QuickNavigation className={styles.quickNavigation} />
            <div
                className={classnames(
                    styles.burger,
                    !isOpen && styles.burgerOverContentBackground,
                )}
            >
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
                    <MenuItems onItemClick={handleCloseMenu} />
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
