import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { guardRecoilDefaultValue } from "./helpers";

const selectedTodoAtom = atom<string | null>({
    key: "selectedTodoAtom",
    default: null,
});

export const selectedTodoSelector = selector<string | null>({
    key: "selectedTodoSelector",
    get: ({ get }) => {
        return get(selectedTodoAtom);
    },
    set: ({ get, set }, id) => {
        if (guardRecoilDefaultValue(id)) return;

        const currentlySelectedTodoId = get(selectedTodoAtom);
        if (currentlySelectedTodoId === id) {
            return;
        }
        if (currentlySelectedTodoId) {
            set(isTodoSelectedAtomFamily(currentlySelectedTodoId), false);
        }
        if (id) {
            set(isTodoSelectedAtomFamily(id), true);
        }
        set(selectedTodoAtom, id);
    },
});

export const isTodoSelectedAtomFamily = atomFamily<boolean, string>({
    key: "isTodoSelectedAtomFamily",
    default: false,
});

export const isTodoSelectedSelectorFamily = selectorFamily<boolean, string>({
    key: "isTodoSelectedSelectorFamily",
    get: (todoId) => {
        return ({ get }) => {
            return get(isTodoSelectedAtomFamily(todoId));
        };
    },
    set: (todoId) => {
        return ({ set }) => {
            set(selectedTodoSelector, todoId);
        };
    },
});
