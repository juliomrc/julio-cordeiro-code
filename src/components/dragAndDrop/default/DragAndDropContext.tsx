import React from "react";
import {
    DragDropContext,
    DropResult,
    ResponderProvided,
} from "react-beautiful-dnd";
import { DragAndDropContextProps } from "./@types/DragAndDropTypes";

export const DragAndDropContext: React.FC<DragAndDropContextProps> = ({
    children,
    onDragEnd,
    itemIds,
    onItemIdsSorted,
    ...props
}) => {
    const handleDragEnd = (result: DropResult, provided: ResponderProvided) => {
        const { destination, source, draggableId } = result;

        if (
            !destination ||
            (destination.droppableId === source.droppableId &&
                destination.index === source.index)
        ) {
            return;
        }

        if (onDragEnd) {
            onDragEnd(result, provided);
        }

        if (itemIds && onItemIdsSorted) {
            const itemsArrayCopy = Array.from(itemIds);
            itemsArrayCopy.splice(source.index, 1);
            itemsArrayCopy.splice(destination.index, 0, draggableId);

            onItemIdsSorted(itemsArrayCopy);
        }
    };
    return (
        <DragDropContext {...props} onDragEnd={handleDragEnd}>
            {children}
        </DragDropContext>
    );
};
