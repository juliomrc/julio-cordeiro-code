import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

import { TextInput } from "@components/inputs/text-input";
import { Button } from "@components/inputs/button";

import { todoItemSelector } from "../todo-list-state";
import { ReRenderHighlight } from "../re-render-highlight";

const defaultTodoTitle = "Todo title";

export const AddTodo: React.FC = () => {
    const [todoTitle, setTodoTitle] = useState(defaultTodoTitle);
    const setTodo = useSetRecoilState(todoItemSelector);

    const handleAddTodo = () => {
        if (todoTitle) {
            setTodo(todoTitle);
            setTodoTitle(defaultTodoTitle);
        }
    };

    const handleAdd100Todo = () => {
        for (let i = 0; i < 100; i++) {
            handleAddTodo();
        }
    };

    return (
        <ReRenderHighlight>
            <TextInput value={todoTitle} onValueChange={setTodoTitle} />
            <Button onClick={handleAddTodo}>Add Todo</Button>
            <Button onClick={handleAdd100Todo}>
                Add 100 default Todo items
            </Button>
        </ReRenderHighlight>
    );
};
