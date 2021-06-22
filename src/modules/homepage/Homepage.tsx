import React from "react";
import { Typography } from "@components/typography";
import { useHomepageStyles } from "./useHomepageStyles";
import { Link } from "@components/inputs/link";
import { routes } from "@resources/constants/routes";

export const Homepage: React.FC = () => {
    const styles = useHomepageStyles();

    return (
        <div>
            <Typography
                className={styles.header}
                color="textPrimary"
                variant="h2"
            >
                <b>Welcome!</b>
            </Typography>
            <Typography>
                My name is Julio Cordeiro, I am a frontend developer and this is
                my <i>portfolio / playground</i> website.
            </Typography>
            <Typography>
                Check out my <Link to={routes.about}>profile</Link> and maybe
                follow me on{" "}
                <Link target="_blank" href={"https://github.com/juliomrc"}>
                    github
                </Link>
                ? :)
            </Typography>
        </div>
    );
};

export default Homepage;
