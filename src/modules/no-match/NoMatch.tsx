import React from "react";
import { Link } from "@components/inputs/link";
import { PageHeader } from "@components/text/page-header";
import { routes } from "@resources/constants/routes";
import { SectionParagraph } from "@components/text/section-paragraph";

export const NoMatch: React.FC = () => {
    return (
        <>
            <PageHeader>Wow, this page doesn't seem to exist.</PageHeader>
            <SectionParagraph>
                Try going back. Or start again from the{" "}
                <Link to={routes.homepage}>homepage</Link>.
            </SectionParagraph>
            <SectionParagraph>
                What were you trying to find, though? I swear there is nothing
                hidden on this website :)
            </SectionParagraph>
        </>
    );
};

export default NoMatch;
