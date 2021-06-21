import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "@components/inputs/link";
import { routes } from "@resources/constants/routes";

export const About: React.FC = () => {
    return (
        <div>
            <Link to={routes.homepage}>Homepage</Link>
            <Typography>
                Hi! My name is Julio and I am a frontend developer. In this
                website, I will create examples of some of the work I've created
                during my career.
            </Typography>
        </div>
    );
};

export default About;
