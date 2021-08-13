import React from "react";
import { ListItem } from "@material-ui/core";
import { useRecoilState } from "recoil";
import { isTodoSelectedSelectorFamily } from "../../todo-list-state";
import { TodoPreview } from "./TodoPreview";

interface TodoListItemProps {
    id: string;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ id }) => {
    const [isSelected, setIsSelected] = useRecoilState(
        isTodoSelectedSelectorFamily(id),
    );

    const handleItemClick = () => {
        setIsSelected(true);
    };

    return (
        <ListItem
            button
            onClick={handleItemClick}
            selected={isSelected}
            key={id}
        >
            <TodoPreview id={id} />
        </ListItem>
    );
};
