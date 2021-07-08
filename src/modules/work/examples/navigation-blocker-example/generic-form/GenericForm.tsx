import React from "react";
import { TextInput } from "@components/inputs/text-input";
import { useGenericForm } from "./useGenericForm";
import { Switch } from "@components/inputs/switch";
import { FormControlLabel } from "@material-ui/core";
import { Button } from "@components/inputs/button";
import { useGenericFormStyles } from "./useGenericFormStyles";
import { InputsColumn } from "@components/inputs/inputs-column";
import { Typography } from "@components/text/typography";
import { Presets } from "react-component-transition";
import { SectionParagraph } from "@components/text/section-paragraph";
import { Link } from "@components/inputs/link";
import { routes } from "@resources/constants/routes";

export const GenericForm: React.FC = () => {
    const formLogic = useGenericForm();

    const styles = useGenericFormStyles();

    return (
        <form className={styles.form} onSubmit={formLogic.handleSubmit}>
            <SectionParagraph>
                If this form has unsaved changes, try to navigate out of this
                page. For the purposes of the demonstration, every form submit
                will also print in the browser console. Check it out when saving
                and navigating away!
            </SectionParagraph>
            <InputsColumn>
                <TextInput
                    label={"Name"}
                    onValueChange={formLogic.updaterAndValidatorForField(
                        "name",
                    )}
                    value={formLogic.formState.name}
                />
                <TextInput
                    label={"Surname"}
                    onValueChange={formLogic.updaterAndValidatorForField(
                        "surname",
                    )}
                    value={formLogic.formState.surname}
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={formLogic.formState.likesDogs}
                            onValueChange={formLogic.updaterAndValidatorForField(
                                "likesDogs",
                            )}
                        />
                    }
                    label="Likes dogs"
                />
                <Button type={"submit"}>Submit</Button>
            </InputsColumn>
            <SectionParagraph>
                <Link to={routes.homepage}>
                    Click here to navigate to the homepage.
                </Link>
            </SectionParagraph>
            <SectionParagraph>Submitted data:</SectionParagraph>
            <Presets.TransitionFade>
                <React.Fragment
                    key={`${formLogic.submittedData.name}${formLogic.submittedData.surname}${formLogic.submittedData.likesDogs}`}
                >
                    <Typography>
                        Name: {`${formLogic.submittedData.name ?? " - "}; `}
                        Surname:{" "}
                        {`${formLogic.submittedData.surname ?? " - "}; `}
                        Likes dogs:{" "}
                        {`${formLogic.submittedData.likesDogs ?? " - "}; `}
                    </Typography>
                </React.Fragment>
            </Presets.TransitionFade>
        </form>
    );
};
