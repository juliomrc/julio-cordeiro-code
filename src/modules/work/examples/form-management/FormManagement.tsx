import React from "react";
import { Link } from "@components/inputs/link";
import { Typography } from "@components/text/typography";
import { routes } from "@resources/constants/routes";

export const FormManagement: React.FC = () => {
    return (
        <>
            <Typography>
                Professionally, I worked with the popular{" "}
                <Link target="_blank" to={"https://formik.org/"}>
                    Formik
                </Link>{" "}
                and a home built solution in Bank Millennium. For my current
                project, I felt most options available were overcomplicated, so
                I created something as simple as possible. Check out{" "}
                <Link
                    target="_blank"
                    href={
                        "https://www.npmjs.com/package/react-simple-form-manager"
                    }
                >
                    react-simple-form-manager
                </Link>{" "}
                on npm.
            </Typography>
            <Typography>
                I've also built a small validator that will grab your attention
                when you insist on submitting an invalid form. You can check the{" "}
                <Link to={routes.contact}>contact</Link> form on this website.
            </Typography>
        </>
    );
};
