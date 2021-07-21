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
        <div className={styles.content}>
            <Button
                onClick={handleClickLookAround}
                className={styles.buttonOverCanvas}
            >
                {isThreeJSAbove
                    ? "Click me to go back"
                    : "Click me to look around"}
            </Button>
            <div className={classnames(isThreeJSAbove && styles.underContent)}>
                <PageHeader>3D animations in javascript</PageHeader>
                <SectionParagraph>
                    I've wanted to try creating 3D animations in javascript for
                    a while, but I never had the professional reason to, so this
                    website was the perfect place to try it.
                </SectionParagraph>
                <SectionParagraph>
                    <Link target={"_blank"} href={"https://threejs.org/"}>
                        ThreeJS
                    </Link>{" "}
                    is a pretty cool library that has been around for a while
                    now. Check out their website and and all the amazing things
                    people created!
                </SectionParagraph>
                <SectionParagraph>
                    It was fun, but also exhausting. The initial idea was to
                    have it as the background of the website, and change the
                    colors depending on the theme, but my creativity and color
                    pallette building capacities found their limits, so the
                    animation found it's place here. :)
                </SectionParagraph>
            </div>
            <ThreeJSCanvasAnimation isThreeJSAbove={isThreeJSAbove} />
        </div>
    );
};

export default ThreeJS;
