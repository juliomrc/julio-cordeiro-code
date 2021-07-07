import React from "react";
import { DragAndDropContextProps } from "../default/DragAndDropTypes";
import { DragAndDropContext } from "../default/DragAndDropContext";
import { DragAndDropDroppable } from "../default/DragAndDropDroppable";

export const DragAndDropVerticalListContainer: React.FC<DragAndDropContextProps> =
    ({ children, ...contextProps }) => {
        return (
            <DragAndDropContext {...contextProps}>
                <DragAndDropDroppable droppableId={"droppableUniqueId"}>
                    {children}
                </DragAndDropDroppable>
            </DragAndDropContext>
        );
    };
