import {
    useFormManager as useSimpleFormManager,
    UseFormManagerProps,
} from "react-simple-form-manager";
import { scrollAndShakeFirstError } from "../error-message";

export const useFormManager = <TFormState>(
    props: UseFormManagerProps<TFormState>,
) => {
    const formManager = useSimpleFormManager<TFormState>(props);

    const handleSubmit = (event: React.SyntheticEvent<Element, Event>) => {
        showErrorToUser(formManager.visibleErrors);
        formManager.handleSubmit(event);
    };

    return {
        ...formManager,
        handleSubmit,
    };
};

const showErrorToUser = (
    visibleErrors: Record<string, boolean | undefined>,
) => {
    const hasAnyVisibleError = Object.values(visibleErrors).some(
        (value) => value,
    );

    if (hasAnyVisibleError) {
        scrollAndShakeFirstError();
    }
};
