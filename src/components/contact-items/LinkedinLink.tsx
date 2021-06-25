import { Link } from "@components/inputs/link";
import React from "react";

export const LinkedinLink: React.FC = () => {
    return (
        <Link
            target={"_blank"}
            href={"https://www.linkedin.com/in/juliomrcordeiro/"}
        >
            Linkedin
        </Link>
    );
};
