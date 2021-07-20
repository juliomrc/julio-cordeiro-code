import React, { useState } from "react";
import classnames from "classnames";
import Hamburger from "hamburger-react";

import { BottomNavigation } from "./bottom-navigation";
import { QuickNavigation } from "./quick-navigation";
import { useMenuStyles } from "./useMenuStyles";

import { ThemeSwitch } from "@components/theme/ThemeSwitch";
import { LazyThreeJS } from "@modules/three-js/LazyThreeJS";

export const Menu: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    const handleCloseMenu = () => {
        setOpen(false);
    };

    const styles = useMenuStyles();
    return (
        <header className={styles.header}>
            <div className={styles.quickNavigation}>
                <QuickNavigation />
            </div>
            <div
                className={classnames(
                    styles.burger,
                    !isOpen && styles.burgerOverContentBackground,
                    isOpen && styles.contentOverThreeJs,
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
                    <LazyThreeJS shouldMount={isOpen} />
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
