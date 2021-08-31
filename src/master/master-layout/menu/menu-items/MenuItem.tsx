import React from "react";
import { Link } from "@components/inputs/link";
import { Typography } from "@components/text/typography";
import { useMenuItemsStyles } from "./useMenuItemsStyles";

interface MenuItemProps {
    onClick: () => void;
    to: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    to,
    children,
}) => {
    const styles = useMenuItemsStyles();

    return (
        <Link
            className={styles.item}
            color={"inherit"}
            onClick={onClick}
            to={to}
        >
            <Typography className={styles.itemText}>{children}</Typography>
        </Link>
    );
};
