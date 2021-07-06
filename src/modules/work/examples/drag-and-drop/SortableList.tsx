import React, { useState } from "react";
import { Typography } from "@components/text/typography";
import {
    DragAndDropVerticalListContainer,
    DragAndDropVerticalListItem,
} from "@components/dragAndDrop/dragAndDropVerticalList";
import { Paper } from "@material-ui/core";
import { useSortableListStyles } from "./useSortableListStyles";

const defaultListItems = [
    "This is item 1",
    "This is item 2",
    "This is item 3",
    "This is item 4",
    "This is item 5",
    "This is item 6",
    "This is item 7",
    "This is item 8",
    "This is item 9",
    "This is item 10",
];

export const SortableList: React.FC = () => {
    const [itemsList, setItemsList] = useState(defaultListItems);

    const onSortEnd = (sortedItems: string[]) => {
        setItemsList(sortedItems);
    };

    const styles = useSortableListStyles();

    return (
        <div className={styles.container}>
            <DragAndDropVerticalListContainer
                itemIds={itemsList}
                onItemIdsSorted={onSortEnd}
            >
                {itemsList.map((item, index) => (
                    <DragAndDropVerticalListItem
                        key={item}
                        index={index}
                        draggableId={item}
                    >
                        <Paper className={styles.item} variant="outlined">
                            <Typography>{item}</Typography>
                        </Paper>
                    </DragAndDropVerticalListItem>
                ))}
            </DragAndDropVerticalListContainer>
        </div>
    );
};
