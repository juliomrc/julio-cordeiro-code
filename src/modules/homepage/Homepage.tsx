import React from "react";
import { Link } from "@components/inputs/link";
import { Typography } from "@components/typography";
import { routes } from "@resources/constants/routes";

export const Homepage: React.FC = () => {
    return (
        <div>
            <Link to={routes.about}>About</Link>
            <Typography>Hi! This is the homepage</Typography>
        </div>
    );
};

export default Homepage;
