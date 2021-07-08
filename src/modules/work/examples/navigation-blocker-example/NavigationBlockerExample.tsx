import { NavigationBlockerContextProvider } from "@components/navigation-blocker";
import { SectionParagraph } from "@components/text/section-paragraph";
import React from "react";
import { GenericForm } from "./generic-form";

export const NavigationBlockerExample: React.FC = () => {
    return (
        <NavigationBlockerContextProvider>
            <SectionParagraph>
                Mostly used in pair with forms, I've been tasked with building
                navigation blockers in every place I've worked. Simple cases are
                rather straightforward to build, but adding exceptions adds
                exponential complexity.
            </SectionParagraph>
            <SectionParagraph>
                I've used three different approaches, for different reasons:
            </SectionParagraph>
            <ul>
                <li>
                    <SectionParagraph>
                        Storing only the destination url. Simpler of all cases
                        and easily done globally.
                    </SectionParagraph>
                </li>
                <li>
                    <SectionParagraph>
                        Storing and re-executing the event that triggered the
                        redirection combined with wrapping all anchors and
                        buttons with a wrapper to listen to the click event.
                        Quite more bug prone and complicated, but it made it
                        easier to keep proper logging and other functionalities
                        of the website to continue to work with no changes.
                    </SectionParagraph>
                </li>
                <li>
                    <SectionParagraph>
                        Storing the destination url and some{" "}
                        <i>before redirection</i> callbacks. This sits somewhere
                        in the middle of the other options and is the one build
                        in the next example.
                    </SectionParagraph>
                    <SectionParagraph>
                        If used with a single form, this can be done with a
                        local component, but if it is required to listen to
                        multiple forms and multiple callbacks, it should be done
                        globally. Storing callbacks in a context introduces the
                        stale state problem though, so refs have to be used.
                    </SectionParagraph>
                </li>
            </ul>
            <GenericForm />
        </NavigationBlockerContextProvider>
    );
};
