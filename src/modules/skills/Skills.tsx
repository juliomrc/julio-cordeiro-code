import React from "react";
import { PageHeader } from "@components/text/page-header";
import { TwoColumns } from "@components/containers/two-columns";
import { SectionParagraph } from "@components/text/section-paragraph";
import { useSkillsStyles } from "./useSkillsStyles";
import { SkillBarGroup } from "./skill-bar-group";
import { coreSkills, otherTechnologies } from "./skillsDefinitions";
import { Link } from "@components/inputs/link";
import { routes } from "@resources/constants/routes";

export const Skills: React.FC = () => {
    const styles = useSkillsStyles();
    return (
        <div className={styles.centeredFullContent}>
            <PageHeader>Skills</PageHeader>
            <SectionParagraph>
                Demonstrated prowess in frontend architecture, excelling in
                scalable and resilient solutions. Glad to assume ownership of
                development. Enthusiastic about learning new technologies.
            </SectionParagraph>
            <SectionParagraph>
                Note: This website was built as a small project and I wanted to
                build a small animation like the one bellow, so the values might
                not be up to date. Better check the{" "}
                <Link to={routes.about}>about</Link> section and download my CV
                for the most up to date information.
            </SectionParagraph>
            <TwoColumns singleColumnMobile breakpoint="xs">
                <SkillBarGroup title="Core technologies" skills={coreSkills} />
                <SkillBarGroup
                    title="Other technologies"
                    skills={otherTechnologies}
                    baseDelay={500}
                />
            </TwoColumns>
        </div>
    );
};

export default Skills;
