import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

import { TextInput } from "@components/inputs/text-input";
import { Button } from "@components/inputs/button";

import { todoItemSelector } from "../todo-list-state";
import { ReRenderHighlight } from "../re-render-highlight";

const defaultTodoTitle = "";

export const AddTodo: React.FC = () => {
    const [todoTitle, setTodoTitle] = useState(defaultTodoTitle);
    const setTodo = useSetRecoilState(todoItemSelector);

    const handleAddTodo = () => {
        if (todoTitle) {
            setTodo(todoTitle);
            setTodoTitle(defaultTodoTitle);
        }
    };

    return (
        <ReRenderHighlight>
            <TextInput value={todoTitle} onValueChange={setTodoTitle} />
            <Button onClick={handleAddTodo}>Add Todo</Button>
        </ReRenderHighlight>
    );
};
