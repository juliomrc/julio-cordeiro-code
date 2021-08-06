import { buildSceneCameraAndRenderer } from "./buildSceneCameraAndRenderer";
import { buildObjects } from "./buildObjects";
import { positionElements } from "./positionElements";
import { animateElements } from "./animateItems";

export const initializeThreeJS = async () => {
    const { camera, scene, renderer } = buildSceneCameraAndRenderer();
    const { particles, bluePointLight, redPointLight, sphere } =
        await buildObjects();

    positionElements(particles, bluePointLight, redPointLight, sphere, camera);
    scene.add(sphere, bluePointLight, redPointLight, ...particles);

    animateElements(sphere, particles, scene, camera, renderer);
};
