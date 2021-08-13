import React from "react";
import { RecoilRoot } from "recoil";
import { TodoList } from "./todo-list";
import { AddTodo } from "./add-todo";
import { TodoConfig } from "./todo-config";
import { ShouldRerenderHighlightSwitch } from "./re-render-highlight";

export const Recoil: React.FC = () => {
    return (
        <RecoilRoot>
            <AddTodo />
            <ShouldRerenderHighlightSwitch />
            <TodoConfig />
            <TodoList />
        </RecoilRoot>
    );
};

export default Recoil;
