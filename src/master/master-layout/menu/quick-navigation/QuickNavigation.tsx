import React from "react";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { routes } from "@resources/constants/routes";
import { QuickNavigationItem } from "./QuickNavigationItem";
import { quickNavigationItemsList } from "./QuickNavigationItemsList";
import { useQuickNavigationStyles } from "./useQuickNavigationStyles";

export const QuickNavigation: React.FC = () => {
    const styles = useQuickNavigationStyles();

    const location = useLocation();
    const isThreeJSPage = location.pathname === routes.threeJS;

    return (
        <div className={classNames(isThreeJSPage && styles.contentOverThreeJs)}>
            {quickNavigationItemsList.map((item, index) => {
                return (
                    <span className={styles.item} key={index}>
                        <QuickNavigationItem to={item.route}>
                            {item.label}
                        </QuickNavigationItem>
                        {index !== quickNavigationItemsList.length - 1 && " | "}
                    </span>
                );
            })}
        </div>
    );
};
