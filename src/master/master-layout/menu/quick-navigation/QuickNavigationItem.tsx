import { Link } from "@components/inputs/link";
import React from "react";
import { useQuickNavigationStyles } from "./useQuickNavigationStyles";

interface QuickNavigationItemProps {
    to: string;
}

export const QuickNavigationItem: React.FC<QuickNavigationItemProps> = ({
    children,
    to,
}) => {
    const styles = useQuickNavigationStyles();
    return (
        <Link color={"textPrimary"} className={styles.itemText} to={to}>
            {children}
        </Link>
    );
};
