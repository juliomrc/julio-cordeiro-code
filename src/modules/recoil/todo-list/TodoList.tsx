import React from "react";
import { List } from "@material-ui/core";
import { useRecoilValue } from "recoil";
import { todoListAtom } from "../todo-list-state";
import { ReRenderHighlight } from "../re-render-highlight";
import { TodoListItem } from "./todo-list-item";

export const TodoList: React.FC = () => {
    const todoList = useRecoilValue(todoListAtom);

    return (
        <ReRenderHighlight>
            <List dense>
                {todoList.map((todoId) => {
                    return <TodoListItem key={todoId} id={todoId} />;
                })}
            </List>
        </ReRenderHighlight>
    );
};
