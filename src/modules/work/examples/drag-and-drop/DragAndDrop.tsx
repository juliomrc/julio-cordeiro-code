import React from "react";
import { SortableList } from "./SortableList";
import { SectionParagraph } from "@components/text/section-paragraph";

export const DragAndDrop: React.FC = () => {
    return (
        <>
            <SectionParagraph>
                I Implemented a few different versions of drag and drop
                throughout my career. Some in combination with background
                blurring, different draggable areas or even nesting.
            </SectionParagraph>
            <SectionParagraph>
                It turns out that doing something standard (like this example or
                with some variations) is really simple. There are great
                libraries out there to facilitate it.
            </SectionParagraph>
            <SortableList />
        </>
    );
};
