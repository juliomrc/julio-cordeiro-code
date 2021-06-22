import { Link } from "@components/inputs/link";
import { Typography } from "@components/typography";
import { routes } from "@resources/constants/routes";
import React from "react";

export const NoMatch: React.FC = () => {
    return (
        <div>
            <Typography>
                This page doesn't seem to exist. Care to go back to the{" "}
                <Link to={routes.homepage}>homepage</Link>?
            </Typography>
        </div>
    );
};

export default NoMatch;
