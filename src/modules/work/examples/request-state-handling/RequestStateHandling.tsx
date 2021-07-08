import React from "react";
import { SectionParagraph } from "@components/text/section-paragraph";
import { FetchExamples } from "./fetch-examples";

export const RequestStateHandling: React.FC = () => {
    return (
        <>
            <SectionParagraph>
                Every non-static website has some sort of fetching to a backend
                server. These asynchronous requests to the BE might take some
                time to complete, especially in slower connections, and
                eventually a request can and will certainly fail. Therefore it
                is crucial that every request to the BE has some sort of of
                "state" handling.
            </SectionParagraph>
            <SectionParagraph>
                Not to be confused with the fetching handling itself, this is
                about presenting the state of said request to the user.
            </SectionParagraph>
            <SectionParagraph>
                It is important that the user understands what is going on,
                through some loaders and some error messages, and it is
                important that such mechanism is handled quite easily by the
                programmer. After all, it most likely will be used very often in
                the website.
            </SectionParagraph>
            <FetchExamples />
            <SectionParagraph>
                P.S: With concurrent React, this will most likely be outdated in
                it's current form.
            </SectionParagraph>
        </>
    );
};
