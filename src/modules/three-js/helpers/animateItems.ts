import { Scene, Camera, Renderer } from "three";
import { Sphere } from "./types";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const animateElements = (
    sphere: Sphere,
    particles: Sphere[],
    scene: Scene,
    camera: Camera,
    renderer: Renderer,
) => {
    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
        requestAnimationFrame(animate);

        animateSphere(sphere);
        animateParticles(particles);

        controls.update();
        renderer.render(scene, camera);
    };

    animate();
};

const animateSphere = (sphere: Sphere) => {
    sphere.rotation.x += 0.001;
    sphere.rotation.y += 0.001;
    sphere.rotation.z += 0.001;
};

const speed = 2;
const animateParticles = (particles: Sphere[]) => {
    particles.forEach((particle) => {
        if (particle.position.x > 250) {
            particle.position.x = -200;
        }
        particle.position.x += speed;
    });
};
