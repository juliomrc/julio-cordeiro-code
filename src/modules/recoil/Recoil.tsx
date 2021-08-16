import React from "react";
import { RecoilExample } from "./recoil-example";
import { PageHeader } from "@components/text/page-header";
import { SectionParagraph } from "@components/text/section-paragraph";
import { Link } from "@components/inputs/link";

export const Recoil: React.FC = () => {
    return (
        <>
            <PageHeader>Recoil</PageHeader>
            <SectionParagraph>
                <Link target={"_blank"} href={"https://recoiljs.org"}>
                    Recoil
                </Link>{" "}
                is a cool state management library built by some smart people
                @facebook.
            </SectionParagraph>
            <SectionParagraph>
                Although it works wonderfully, its API is still often changing
                and, according to the authors, it isn't production ready yet.
                The library's API "feels like" react, and is therefore easy to
                learn. It looks like as it will be mainstream in the near
                future.
            </SectionParagraph>
            <SectionParagraph>
                Here is a short example with Recoil basics:
            </SectionParagraph>
            <RecoilExample />
        </>
    );
};

export default Recoil;
