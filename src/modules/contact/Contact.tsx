import React from "react";
import { PageHeader } from "@components/text/page-header";
import { TextInput } from "@components/inputs/text-input";
import { TextArea } from "@components/inputs/text-area";
import { InputsColumn } from "@components/inputs/inputs-column";
import { useContactStyles } from "./useContactStyles";
import { SectionParagraph } from "@components/text/section-paragraph";
import { Button } from "@components/inputs/button";
import { LinkedinLink } from "@components/contact-items";
import { ContactForm, contactFormValidator } from "./contact-form-helpers";
import { useFormManager } from "@components/form-management/use-form-manager";

export const Contact: React.FC = () => {
    const formManager = useFormManager<ContactForm>({
        onSubmit: (formState) => console.log(formState),
        validators: contactFormValidator,
    });

    const styles = useContactStyles();

    return (
        <div className={styles.centeredFullContent}>
            <PageHeader>Let's get in touch.</PageHeader>
            <form
                className={styles.formContainer}
                onSubmit={formManager.handleSubmit}
            >
                <InputsColumn>
                    <SectionParagraph>
                        Send me an email and I will get back to you as soon as
                        possible. You can also reach out on <LinkedinLink />.
                    </SectionParagraph>
                    <SectionParagraph>
                        P.S: The BE is not implemented yet, so <LinkedinLink />{" "}
                        is definitely the best option.
                    </SectionParagraph>
                    <TextInput
                        className={styles.firstInput}
                        label={"Email"}
                        placeholder={"youremail@yourdomain.com"}
                        onValueChange={formManager.updaterAndValidatorForField(
                            "email",
                        )}
                        value={formManager.formState.email}
                        error={formManager.visibleErrors.email}
                        helperText={
                            formManager.visibleErrors.email &&
                            "Please type a valid email"
                        }
                    />
                    <TextInput
                        label={"Subject"}
                        onValueChange={formManager.updaterAndValidatorForField(
                            "subject",
                        )}
                        value={formManager.formState.subject}
                        error={formManager.visibleErrors.subject}
                        helperText={
                            formManager.visibleErrors.subject &&
                            "Please type a more descriptive subject"
                        }
                    />
                    <TextArea
                        label={"Body"}
                        onValueChange={formManager.updaterAndValidatorForField(
                            "body",
                        )}
                        value={formManager.formState.body}
                        error={formManager.visibleErrors.body}
                        helperText={
                            formManager.visibleErrors.body &&
                            "Please type a more descriptive body"
                        }
                    />
                    <Button type="submit">Send</Button>
                </InputsColumn>
            </form>
        </div>
    );
};

export default Contact;
