const noWidth = {
    opacity: 0,
    width: 0,
};
const maximumWidth = (percentage: number) => ({
    opacity: 1,
    width: `${percentage}%`,
});

const options = (duration: number, delay: number) => {
    return {
        duration,
        delay,
        fill: "forwards",
    } as KeyframeAnimationOptions;
};

export const getFillAnimation = (
    percentage: number,
    duration: number,
    delay: number,
) => {
    return {
        keyframes: [
            { ...noWidth },
            {
                ...maximumWidth(percentage),
            },
        ],
        options: options(duration, delay),
    };
};

export const getHideAnimation = (
    percentage: number,
    duration: number,
    delay: number,
) => {
    return {
        keyframes: [
            {
                ...maximumWidth(percentage),
            },
            { ...noWidth },
        ],
        options: options(duration, delay),
    };
};
