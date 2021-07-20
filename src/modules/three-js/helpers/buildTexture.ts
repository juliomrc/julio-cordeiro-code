import { TextureLoader } from "three";
import normalMap from "./NormalMap.png";

export const buildTexture = async () => {
    const spaceTexture = await new TextureLoader().loadAsync(normalMap);

    return spaceTexture;
};
