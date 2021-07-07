import {
    DragDropContextProps,
    DraggableProps,
    DroppableProps,
    DropResult,
    ResponderProvided,
} from "react-beautiful-dnd";

export interface DragAndDropContextProps
    extends Omit<DragDropContextProps, "onDragEnd"> {
    onDragEnd?: (result: DropResult, provided: ResponderProvided) => void;
    itemIds?: string[];
    onItemIdsSorted?: (sortedItemIds: string[]) => void;
}

export interface DragAndDropDraggableProps
    extends Omit<DraggableProps, "children"> {
    className?: string;
}

export interface DragAndDropDroppableProps
    extends Omit<DroppableProps, "children" | "droppableId"> {
    droppableId: string;
}
