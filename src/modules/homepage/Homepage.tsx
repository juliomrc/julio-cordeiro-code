import { Link } from "@components/inputs/link";
import { Typography } from "@material-ui/core";
import { routes } from "@resources/constants/routes";
import React from "react";

export const Homepage: React.FC = () => {
    return (
        <div>
            <Link to={routes.about}>About</Link>
            <Typography>Hi! This is the homepage</Typography>
        </div>
    );
};

export default Homepage;
