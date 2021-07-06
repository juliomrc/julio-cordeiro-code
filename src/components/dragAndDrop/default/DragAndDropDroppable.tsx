import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { DragAndDropDroppableProps } from "./@types/DragAndDropTypes";

export const DragAndDropDroppable: React.FC<DragAndDropDroppableProps> = ({
    children,
    ...props
}) => {
    return (
        <Droppable {...props}>
            {(provided) => {
                return (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {children}
                        {provided.placeholder}
                    </div>
                );
            }}
        </Droppable>
    );
};
