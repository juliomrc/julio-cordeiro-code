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
    className: string;
    onChangeNavigation: () => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
    className,
    onChangeNavigation,
}) => {
    const location = useLocation();
    const history = useHistory();
    const handleChangeRoute = (
        _event: React.ChangeEvent<unknown>,
        newValue: string,
    ) => {
        onChangeNavigation();
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
                label="Work"
                value={routes.work}
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
