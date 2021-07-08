import React from "react";
import { Skill } from "./skill";

const mySkillsAndPercentages = [
    {
        name: "React",
        percentage: 98,
    },
    {
        name: "Typescript",
        percentage: 95,
    },
    {
        name: "Javascript",
        percentage: 80,
    },
    {
        name: "Webpack",
        percentage: 90,
    },
    {
        name: "HTML5",
        percentage: 95,
    },
    {
        name: "CSS3",
        percentage: 85,
    },
    {
        name: "React Native",
        percentage: 70,
    },
    {
        name: "MVC",
        percentage: 40,
    },
    {
        name: "C#",
        percentage: 50,
    },
];

export const SkillBars: React.FC = () => {
    return (
        <>
            {mySkillsAndPercentages.map((skill, index) => {
                const maximumDuration = mySkillsAndPercentages.length * 300;
                const delay = index * 150;
                const duration = maximumDuration - delay;
                return (
                    <Skill
                        key={index}
                        name={skill.name}
                        percentage={skill.percentage}
                        delay={delay}
                        duration={duration}
                    />
                );
            })}
        </>
    );
};
