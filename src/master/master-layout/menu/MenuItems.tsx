import React from "react";
import { Link } from "@components/inputs/link";
import { routes } from "@resources/constants/routes";

interface MenuItemsProps {
    onItemClick: () => void;
}

export const MenuItems: React.FC<MenuItemsProps> = ({ onItemClick }) => {
    return (
        <>
            <Link color={"inherit"} onClick={onItemClick} to={routes.threeJS}>
                Three JS
            </Link>

            <Link color={"inherit"} onClick={onItemClick} to={routes.recoil}>
                Recoil
            </Link>
        </>
    );
};
