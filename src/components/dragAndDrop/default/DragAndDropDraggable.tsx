import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { DragAndDropDraggableProps } from "./@types/DragAndDropTypes";

export const DragAndDropDraggable: React.FC<DragAndDropDraggableProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <Draggable {...props}>
            {(provided) => {
                return (
                    <div
                        ref={provided.innerRef}
                        className={className}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        {children}
                    </div>
                );
            }}
        </Draggable>
    );
};
