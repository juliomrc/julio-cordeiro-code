import React from "react";
import { useRecoilValue } from "recoil";
import classnames from "classnames";
import { Typography } from "@components/text/typography";
import { todoItemAtomFamily } from "../../todo-list-state";
import { useTodoPreviewStyles } from "./useTodoPreviewStyles";
import { ReRenderHighlight } from "../../re-render-highlight";

interface TodoPreviewProps {
    id: string;
}

export const TodoPreview: React.FC<TodoPreviewProps> = ({ id }) => {
    const value = useRecoilValue(todoItemAtomFamily(id));

    const styles = useTodoPreviewStyles();

    return (
        <ReRenderHighlight>
            <Typography className={classnames(value.done && styles.done)}>
                {value.title}
            </Typography>
        </ReRenderHighlight>
    );
};
