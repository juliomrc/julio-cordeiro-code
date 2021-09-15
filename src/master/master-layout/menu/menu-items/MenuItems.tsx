import React from "react";
import { routes } from "@resources/constants/routes";
import { MenuItem } from "./MenuItem";

interface MenuItemsProps {
    onItemClick: () => void;
}

export const MenuItems: React.FC<MenuItemsProps> = ({ onItemClick }) => {
    return (
        <>
            <MenuItem onClick={onItemClick} to={routes.threeJS}>
                Three JS
            </MenuItem>
            <MenuItem onClick={onItemClick} to={routes.recoil}>
                Recoil
            </MenuItem>
            <MenuItem onClick={onItemClick} to={routes.javascriptExercises}>
                Javascript exercises
            </MenuItem>
        </>
    );
};
