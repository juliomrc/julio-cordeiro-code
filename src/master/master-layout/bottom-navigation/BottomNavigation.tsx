import React from "react";
import classnames from "classnames";
import { useHistory, useLocation } from "react-router-dom";
import { Home, Info, Book, Email } from "@material-ui/icons";
import {
    BottomNavigation as MaterialUIBottomNavigation,
    BottomNavigationAction,
} from "@material-ui/core";
import { routes } from "@resources/constants/routes";
import { useBottomNavigationStyles } from "./useBottomNavigationStyles";

interface BottomNavigationProps {
    className?: string;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
    className,
}) => {
    const location = useLocation();
    const history = useHistory();
    const handleChangeRoute = (
        _event: React.ChangeEvent<unknown>,
        newValue: string,
    ) => {
        history.push(newValue);
    };

    const styles = useBottomNavigationStyles();

    return (
        <MaterialUIBottomNavigation
            className={classnames(styles.bottomNavigation, className)}
            value={location.pathname}
            onChange={handleChangeRoute}
        >
            <BottomNavigationAction
                label="Homepage"
                value={routes.homepage}
                icon={<Home />}
            />
            <BottomNavigationAction
                label="About"
                value={routes.about}
                icon={<Info />}
            />
            <BottomNavigationAction
                label="Blog"
                value={routes.blog}
                icon={<Book />}
            />
            <BottomNavigationAction
                label="Contact"
                value={routes.contact}
                icon={<Email />}
            />
        </MaterialUIBottomNavigation>
    );
};
