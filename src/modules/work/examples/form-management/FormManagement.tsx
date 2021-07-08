import React from "react";
import { Link } from "@components/inputs/link";
import { routes } from "@resources/constants/routes";
import { SectionParagraph } from "@components/text/section-paragraph";

export const FormManagement: React.FC = () => {
    return (
        <>
            <SectionParagraph>
                First of all, check out{" "}
                <Link
                    target="_blank"
                    href={
                        "https://www.npmjs.com/package/react-simple-form-manager"
                    }
                >
                    react-simple-form-manager
                </Link>{" "}
                on npm. For my current project, I felt most options available
                were overcomplicated, so I created something simpler for our
                needs. The npm documentation should speak for itself.
            </SectionParagraph>
            <SectionParagraph>
                Professionally, I created a lot of different forms. Some of them
                with the popular{" "}
                <Link target="_blank" href={"https://formik.org/"}>
                    Formik
                </Link>
                , but most with a home built solution in Bank Millennium. From
                simple contact forms to multiple pages of investment forms with
                dynamic sections and validations, I'm prepared to pretty much
                any type of form.
            </SectionParagraph>
            <SectionParagraph>
                I've also built a small validator in this website that will grab
                your attention when you insist on submitting an invalid form.
                You can check the <Link to={routes.contact}>contact</Link> form
                on this website.
            </SectionParagraph>
        </>
    );
};
