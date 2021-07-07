import React from "react";
import classNames from "classnames";
import { DragAndDropDraggable } from "../default/DragAndDropDraggable";
import { useDragAndDropVerticalListStyles } from "./useDragAndDropVerticalListStyles";
import { DragAndDropDraggableProps } from "../default/DragAndDropTypes";

export const DragAndDropVerticalListItem: React.FC<DragAndDropDraggableProps> =
    ({ children, className, ...restProps }) => {
        const cssClasses = useDragAndDropVerticalListStyles();

        return (
            <DragAndDropDraggable
                className={classNames(cssClasses.itemMargin, className)}
                {...restProps}
            >
                {children}
            </DragAndDropDraggable>
        );
    };
