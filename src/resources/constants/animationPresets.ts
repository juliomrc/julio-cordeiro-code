const frame1 = { transform: "translate3d(0, 0, 0)" };
const frame2 = { transform: "translate3d(10px, 0, 0)" };
const frame3 = { transform: "translate3d(20px, 0, 0)" };

interface WebAnimationAPIType {
    keyframes: Keyframe[];
    options: KeyframeAnimationOptions;
}

export const shakeX: WebAnimationAPIType = {
    keyframes: [
        { ...frame1, offset: 0 },
        { ...frame2, offset: 0.1 },
        { ...frame3, offset: 0.3 },
        { ...frame2, offset: 0.5 },
        { ...frame3, offset: 0.7 },
        { ...frame2, offset: 0.9 },
        { ...frame1, offset: 1 },
    ],
    options: { duration: 500, fill: "both" },
};

export const highlight: WebAnimationAPIType = {
    keyframes: [
        {
            backgroundColor: "transparent",
        },
        {
            backgroundColor: "yellow",
        },
        {
            backgroundColor: "transparent",
        },
    ],
    options: { duration: 500, fill: "both" },
};
