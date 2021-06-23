import React from "react";
import { SectionParagraph } from "@components/text/section-paragraph";
import { Link } from "@components/inputs/link";

import pdfCV from "./CV_Julio_Cordeiro.pdf";

export const CV: React.FC = () => {
    return (
        <SectionParagraph>
            TL;DR: You can get my CV{" "}
            <Link href={pdfCV} target="_blank">
                here
            </Link>
            .
        </SectionParagraph>
    );
};
