import React from "react";
import { Typography } from "@components/text/typography";
import { SortableList } from "./SortableList";

export const DragAndDrop: React.FC = () => {
    return (
        <>
            <Typography>
                I Implemented a few different versions of drag and drop
                throughout my career. It turns out, doing something standard
                (like this example) is really simple because there are great
                libraries out there to facilitate it.
            </Typography>
            <SortableList />
        </>
    );
};
