import React from "react";
import { SectionHeader } from "../../../components/text/section-header";
import { SectionParagraph } from "../../../components/text/section-paragraph";
import { StepperSection } from "../about-section-stepper";
import { MyPhoto } from "./my-photo";
import { useMyselfStyles } from "./useMyselfStyles";

export const Myself: React.FC = () => {
    const styles = useMyselfStyles();
    return (
        <StepperSection stepId={"Myself"}>
            <SectionHeader>Myself</SectionHeader>
            <div className={styles.myself}>
                <div>
                    <SectionParagraph>
                        Hi! Let me present myself again: My name is Julio
                        Cordeiro and I work as a web developer.
                    </SectionParagraph>
                    <SectionParagraph>
                        What do I like? I like to play both video and board
                        games, I like to travel a bit, but mostly I like good
                        food and good music.
                    </SectionParagraph>
                    <SectionParagraph>
                        I am Portuguese, but live in Warsaw most of the time. I
                        came here due to a career opportunity, but love and
                        friendship took the best of me and now I call this city
                        my home.
                    </SectionParagraph>
                    <SectionParagraph>
                        I am Portuguese, but live in Warsaw most of the time. I
                        came here due to a career opportunity, but love and
                        friendship took the best of me and I now call this city
                        my home.
                    </SectionParagraph>
                </div>
                <MyPhoto />
            </div>
        </StepperSection>
    );
};
