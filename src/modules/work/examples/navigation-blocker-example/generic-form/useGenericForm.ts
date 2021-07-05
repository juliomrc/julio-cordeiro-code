import { useRef, useState } from "react";
import { useFormManager } from "@components/form-management/use-form-manager";
import { useBlockNavigationWhen } from "@components/navigation-blocker";

interface GenericFormState {
    name: string;
    surname: string;
    likesDogs: boolean;
}

export const useGenericForm = () => {
    const [submittedData, setSubmittedData] = useState<
        Partial<GenericFormState>
    >({});

    const handleFormSubmit = (formState: GenericFormState) => {
        console.log("saved", formState);
        setSubmittedData(formState);
    };

    const { hasEdits, handleSubmit, formState, updaterAndValidatorForField } =
        useFormManager<GenericFormState>({
            onSubmit: handleFormSubmit,
        });

    const stateRef = useRef(formState);
    stateRef.current = formState;
    const handleNavigationBlockerSave = () => {
        handleFormSubmit(stateRef.current);
    };

    useBlockNavigationWhen(hasEdits, handleNavigationBlockerSave);

    return {
        submittedData,
        formState,
        updaterAndValidatorForField,
        handleSubmit,
    };
};
