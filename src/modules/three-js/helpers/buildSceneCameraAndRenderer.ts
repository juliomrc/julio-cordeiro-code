import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

export const threeJsCanvasId = "three-js-bg";
export const buildSceneCameraAndRenderer = () => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
    );

    const renderer = new WebGLRenderer({
        canvas: document.querySelector(
            `#${threeJsCanvasId}`,
        ) as HTMLCanvasElement,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    return {
        scene,
        camera,
        renderer,
    };
};
