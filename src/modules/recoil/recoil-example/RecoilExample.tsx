import React from "react";
import { RecoilRoot } from "recoil";
import { TodoList } from "./todo-list";
import { AddTodo } from "./add-todo";
import { TodoConfig } from "./todo-config";
import { ShouldRerenderHighlightSwitch } from "./re-render-highlight";
import { TwoColumns } from "@components/containers/two-columns";

export const RecoilExample: React.FC = () => {
    return (
        <RecoilRoot>
            <TwoColumns singleColumnMobile>
                <AddTodo />
                <ShouldRerenderHighlightSwitch />
            </TwoColumns>
            <TodoConfig />
            <TodoList />
        </RecoilRoot>
    );
};
