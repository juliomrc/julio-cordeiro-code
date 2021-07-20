import { PointLight, MathUtils, PerspectiveCamera } from "three";
import { Sphere } from "./types";

export const positionElements = (
    particles: Sphere[],
    bluePointLight: PointLight,
    redPointLight: PointLight,
    sphere: Sphere,
    camera: PerspectiveCamera,
) => {
    sphere.position.set(0, 0, -10);
    bluePointLight.position.set(1, -4, -15);
    redPointLight.position.set(-5.1, 4.4, -15);

    particles.forEach((particle) => {
        const [x, y, z] = getRandomCoordinates();
        particle.position.set(x, y, z);
    });

    camera.position.set(10, 5, 10);
};

const getRandomCoordinates = () => [
    MathUtils.randFloatSpread(400),
    MathUtils.randFloatSpread(200),
    MathUtils.randFloatSpread(100),
];
