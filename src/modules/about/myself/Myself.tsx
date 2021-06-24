import { Link } from "@components/inputs/link";
import React from "react";
import { SectionHeader } from "../../../components/text/section-header";
import { SectionParagraph } from "../../../components/text/section-paragraph";
import { StepperSection } from "../about-section-stepper";
import { MyPhoto } from "./my-photo";

export const Myself: React.FC = () => {
    return (
        <StepperSection stepId={"Myself"}>
            <SectionHeader>... myself</SectionHeader>
            <MyPhoto />
            <SectionParagraph>
                Hi! Let me present myself again: My name is Júlio Cordeiro and I
                am a [frontend] web developer.
            </SectionParagraph>
            <SectionParagraph>
                I am Portuguese. I spent my childhood with my family in a small
                (about 600 inhabitants) village in the center of Portugal in the
                middle of a national park named "Parque Natural da Serra de Aire
                e Candeeiros", around 100Km from Lisbon. The protected area is
                rather small, but it was big enough to have a sense of what it
                means to live far away from any city.
            </SectionParagraph>
            <SectionParagraph>
                When I was 18 I moved in to Aveiro to study Electronics and
                Telecommunications Engineering. For me, Aveiro was a rather big
                place at the time: 12K students plus 80K inhabitants! I learned
                a lot during my studies, although mostly about life and not so
                much about electronics. That became especially true within an
                extra-curricular group named "Tuna Universitária de Aveiro"
                (TUA). We played a lot of music, organized a yearly music
                festival, talked about life and drank a few beers from time to
                time. Good times! :)
            </SectionParagraph>
            <SectionParagraph>
                During my last year of university, one of my friends from TUA
                was working on his master thesis about something I would say
                could be compared to{" "}
                <Link target={"_blank"} href={"https://www.imdb.com/"}>
                    imdb.com
                </Link>
                , but for restaurants and bars. It was great, I loved discussing
                the topic... and that is where my interest in programming comes
                from.
            </SectionParagraph>
            <SectionParagraph>
                I decided to change my career plan and during a jobs fair at the
                university I got my first internship opportunity in Porto, 70 Km
                away from my university. Fast forward 8 months, and an
                opportunity to [temporarily] move to Warsaw for a better
                position and salary came along. To my regret, I hadn't been on
                erasmus during my studies, so it was a perfect moment to
                experiment living abroad.
            </SectionParagraph>
            <SectionParagraph>
                Well... fast forward until today and I still live in Warsaw. I
                came here due to a career opportunity, but love and friendship
                took the best of me and now I call this city my home.
            </SectionParagraph>
            <SectionParagraph>
                Ah, and what do I like? I like learning new things and progress
                in my career, I like to play video games, I like to travel a
                bit, but mostly I like good food and good music.
            </SectionParagraph>
        </StepperSection>
    );
};
