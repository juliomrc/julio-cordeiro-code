import { Switch } from "@components/inputs/switch";
import { FormControlLabel } from "@material-ui/core";
import React from "react";
import { useRecoilState } from "recoil";
import { shouldHighlightAtom } from "./shouldHighlightState";

export const ShouldRerenderHighlightSwitch: React.FC = () => {
    const [shouldHightLight, setShouldHighlight] =
        useRecoilState(shouldHighlightAtom);

    return (
        <div>
            <FormControlLabel
                control={
                    <Switch
                        checked={shouldHightLight}
                        onValueChange={() => {
                            setShouldHighlight(!shouldHightLight);
                        }}
                    />
                }
                label="Highlight re-renders"
            />
        </div>
    );
};
