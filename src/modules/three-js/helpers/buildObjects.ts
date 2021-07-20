import { SphereGeometry, MeshStandardMaterial, Mesh, PointLight } from "three";
import { buildTexture } from "./buildTexture";

const defaultNumberOfParticles = 500;

export const buildObjects = async () => {
    const sphere = await buildSphere();
    const particles = buildParticles(defaultNumberOfParticles);
    const bluePointLight = buildPointLight(0x3dddd, 4);
    const redPointLight = buildPointLight("red", 4);

    return { bluePointLight, redPointLight, sphere, particles };
};

const buildSphere = async () => {
    const texture = await buildTexture();
    const geometry = new SphereGeometry(5, 16, 16);
    const material = new MeshStandardMaterial({
        color: "blue",
        normalMap: texture,
    });
    const shape = new Mesh(geometry, material);

    return shape;
};

const buildPointLight = (color: string | number, intensity: number) => {
    const pointLight = new PointLight(color, intensity);
    return pointLight;
};

const buildParticles = (numberOfParticles: number) => {
    const particles = [];

    const buildParticle = () => {
        const geometry = new SphereGeometry(0.1);
        const material = new MeshStandardMaterial({ color: 0xffffff });
        const particle = new Mesh(geometry, material);

        return particle;
    };

    for (let i = 0; i < numberOfParticles; i++) {
        const particle = buildParticle();
        particles.push(particle);
    }

    return particles;
};
