import React from "react";
import { PageHeader } from "@components/text/page-header";
import { TextInput } from "@components/inputs/text-input";
import { TextArea } from "@components/inputs/text-area";
import { InputsColumn } from "@components/inputs/inputs-column";
import { useContactStyles } from "./useContactStyles";
import { SectionParagraph } from "@components/text/section-paragraph";
import { Button } from "@components/inputs/button";
import { LinkedinLink } from "@components/contact-items";
import { useContact } from "./useContact";
import { APIRequestState } from "@components/api-request-sate-handler/api-request-state";
import { Alert } from "@components/alert";
import { Overlay } from "@components/overlay";

export const Contact: React.FC = () => {
    const { requestState, formManager, handleCloseAlert, showSuccess } =
        useContact();

    const styles = useContactStyles();

    return (
        <div className={styles.centeredFullContent}>
            <PageHeader>Let's get in touch.</PageHeader>
            <form
                className={styles.formContainer}
                onSubmit={formManager.handleSubmit}
            >
                <APIRequestState requestState={requestState} />
                <InputsColumn>
                    <SectionParagraph>
                        Send me an email and I will get back to you as soon as
                        possible. You can also reach out on <LinkedinLink />.
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
                        label={"Name"}
                        onValueChange={formManager.updaterAndValidatorForField(
                            "name",
                        )}
                        value={formManager.formState.name}
                        error={formManager.visibleErrors.name}
                        helperText={
                            formManager.visibleErrors.name &&
                            "Let me know your name"
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
                    <Overlay show={showSuccess}>
                        <Alert
                            className={styles.successAlert}
                            onClose={handleCloseAlert}
                        >
                            Success! I should be receiving an email by now and
                            I'll get back as soon as possible.
                        </Alert>
                    </Overlay>
                    <Button type="submit">Send</Button>
                </InputsColumn>
            </form>
        </div>
    );
};

export default Contact;
