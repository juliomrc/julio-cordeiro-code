import React from "react";
import { useRecoilState } from "recoil";

import { selectedTodoSelector } from "../todo-list-state";
import { Presets } from "react-component-transition";
import { TodoConfigOptions } from "./TodoConfigOptions";
import { Card } from "@material-ui/core";
import { useTodoConfigStyles } from "./useTodoConfigStyles";
import { CrossButton } from "@components/inputs/cross-button";

export const TodoConfig: React.FC = () => {
    const [selectedItemId, setSelectedItemId] =
        useRecoilState(selectedTodoSelector);

    const handleUnselect = () => {
        setSelectedItemId(null);
    };

    const styles = useTodoConfigStyles();

    return (
        <Presets.TransitionExpandVertical>
            {selectedItemId && (
                <Card className={styles.container}>
                    <CrossButton
                        className={styles.closeButton}
                        onClick={handleUnselect}
                    />
                    <TodoConfigOptions selectedItemId={selectedItemId} />
                </Card>
            )}
        </Presets.TransitionExpandVertical>
    );
};
