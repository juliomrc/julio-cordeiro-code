import React from "react";
import classNames from "classnames";
import { DragAndDropDraggable } from "../default/DragAndDropDraggable";
import { useDragAndDropVerticalListStyles } from "./useDragAndDropVerticalList.styles";
import { DragAndDropVerticalListItemProps } from "./@types/DragAndDropVerticalListTypes";

export const DragAndDropVerticalListItem: React.FC<DragAndDropVerticalListItemProps> =
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
