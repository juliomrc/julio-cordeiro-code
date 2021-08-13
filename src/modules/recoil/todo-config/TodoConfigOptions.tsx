import React from "react";
import { useRecoilState } from "recoil";
import { FormControlLabel } from "@material-ui/core";
import { Switch } from "@components/inputs/switch";
import { TextInput } from "@components/inputs/text-input";
import { TodoItem, todoItemAtomFamily } from "../todo-list-state";
import { ReRenderHighlight } from "../re-render-highlight";

interface TodoConfigOptionsProps {
    selectedItemId: string;
}

export const TodoConfigOptions: React.FC<TodoConfigOptionsProps> = ({
    selectedItemId,
}) => {
    const [selectedTodoConfig, setSelectedTodoConfig] = useRecoilState(
        todoItemAtomFamily(selectedItemId),
    );

    const fieldChangeListener = <K extends keyof TodoItem>(field: K) => {
        return (value: TodoItem[K]) => {
            setSelectedTodoConfig((currentConfig) => {
                return {
                    ...currentConfig,
                    [field]: value,
                };
            });
        };
    };

    return (
        <ReRenderHighlight>
            <div>
                <TextInput
                    label="title"
                    onValueChange={fieldChangeListener("title")}
                    value={selectedTodoConfig.title}
                />
            </div>
            <div>
                <FormControlLabel
                    control={
                        <Switch
                            checked={selectedTodoConfig.done}
                            onValueChange={fieldChangeListener("done")}
                        />
                    }
                    label="Done"
                />
            </div>
        </ReRenderHighlight>
    );
};
