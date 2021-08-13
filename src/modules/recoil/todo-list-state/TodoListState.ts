import { atom, atomFamily, selector } from "recoil";
import { generateUniqueRandomId } from "@components/generate-unique-random-id";
import { guardRecoilDefaultValue } from "./helpers";

export * from "./SelectedTodoState";

export interface TodoItem {
    title: string;
    done: boolean;
}

export const todoListAtom = atom<string[]>({
    key: "todoList",
    default: [],
});

export const todoItemAtomFamily = atomFamily<TodoItem, string>({
    key: "todoItem",
    default: {
        title: "Title",
        done: false,
    },
});

export const todoItemSelector = selector<string>({
    key: "todoItemSelector",
    get: () => {
        return "1";
    },
    set: ({ get, set }, title) => {
        if (guardRecoilDefaultValue(title)) return;

        const todoList = get(todoListAtom);
        const newItemId = generateUniqueRandomId("todo-");
        const updatedTodoList = [...todoList, newItemId];
        set(todoListAtom, updatedTodoList);
        set(todoItemAtomFamily(newItemId), {
            title: title,
            done: false,
        });
    },
});
