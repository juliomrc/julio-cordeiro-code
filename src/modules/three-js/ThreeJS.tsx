import React, { useState } from "react";
import classnames from "classnames";
import { useThreeJSStyles } from "./useThreeJSStyles";
import { Button } from "@components/inputs/button";
import { SectionParagraph } from "@components/text/section-paragraph";
import { Link } from "@components/inputs/link";
import { PageHeader } from "@components/text/page-header";
import { ThreeJSCanvasAnimation } from "./ThreeJSCanvasAnimation";

const ThreeJS: React.FC = () => {
    const [isThreeJSAbove, setIsThreeJSAbove] = useState(false);

    const handleClickLookAround = () => {
        setIsThreeJSAbove(!isThreeJSAbove);
    };

    const styles = useThreeJSStyles();

    return (
        <>
            <Button
                onClick={handleClickLookAround}
                className={styles.buttonOverCanvas}
            >
                {isThreeJSAbove
                    ? "Click me to go back"
                    : "Click me to look around"}
            </Button>
            <div
                className={classnames(
                    styles.text,
                    isThreeJSAbove && styles.underContent,
                )}
            >
                <PageHeader>3D animations in javascript</PageHeader>
                <SectionParagraph>
                    I've wanted to try creating 3D animations in javascript for
                    a while, but I never had the professional reason to, so this
                    website was the perfect place to try it. Turns out it is
                    acceptably complicated, but it does require creativity out
                    of my current reach.
                </SectionParagraph>
                <SectionParagraph>
                    <Link target={"_blank"} href={"https://threejs.org/"}>
                        ThreeJS
                    </Link>{" "}
                    is a pretty cool library that has been around for a while
                    now. I only found out about it while building this website
                    though, so I just thought it would be cool to do something
                    with it.
                </SectionParagraph>
                <SectionParagraph>
                    It was fun, but also exhausting. The initial idea was to
                    have it as the background of the website, and change the
                    colors depending on the theme, but my creativity and color
                    pallette building capacities found their limits, so the
                    animation found it's place here. Check out their website and
                    and all the amazing things people created!
                </SectionParagraph>
            </div>
            <ThreeJSCanvasAnimation isThreeJSAbove={isThreeJSAbove} />
        </>
    );
};

export default ThreeJS;
