import { routes } from "@resources/constants/routes";
import React from "react";
import { QuickNavigationItem } from "./QuickNavigationItem";
import { useQuickNavigationStyles } from "./useQuickNavigationStyles";

const navigationItems = [
    {
        label: "Homepage",
        route: routes.homepage,
    },
    {
        label: "Skills",
        route: routes.skills,
    },
    {
        label: "Work examples",
        route: routes.work,
    },
    {
        label: "About",
        route: routes.about,
    },
    {
        label: "Contact",
        route: routes.contact,
    },
];

export const QuickNavigation: React.FC = () => {
    const styles = useQuickNavigationStyles();
    return (
        <>
            {navigationItems.map((item, index) => {
                return (
                    <span className={styles.item} key={index}>
                        <QuickNavigationItem to={item.route}>
                            {item.label}
                        </QuickNavigationItem>
                        {index !== navigationItems.length - 1 && " | "}
                    </span>
                );
            })}
        </>
    );
};