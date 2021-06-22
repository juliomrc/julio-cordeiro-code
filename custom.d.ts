declare module "*.svg" {
    const Component: React.FC<ISvg>;
    export default Component;
}

declare module "*.png" {
    const imageSrc: string;
    export default imageSrc;
}

declare module "*.pdf" {
    const imageSrc: string;
    export default imageSrc;
}
