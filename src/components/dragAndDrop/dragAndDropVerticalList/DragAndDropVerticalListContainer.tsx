import React from "react";
import { DragAndDropContext } from "../default/DragAndDropContext";
import { DragAndDropDroppable } from "../default/DragAndDropDroppable";
import { DragAndDropVerticalListContainerProps } from "./@types/DragAndDropVerticalListTypes";

export const DragAndDropVerticalListContainer: React.FC<DragAndDropVerticalListContainerProps> =
    ({ children, ...contextProps }) => {
        return (
            <DragAndDropContext {...contextProps}>
                <DragAndDropDroppable droppableId={"droppableUniqueId"}>
                    {children}
                </DragAndDropDroppable>
            </DragAndDropContext>
        );
    };
