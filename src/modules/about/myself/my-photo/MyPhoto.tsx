import React from "react";
import { Image } from "@components/image";
import cvPhoto from "./CV_Photo.png";
import { useMyPhotoStyles } from "./useMyPhotoStyles";

export const MyPhoto: React.FC = () => {
    const styles = useMyPhotoStyles();
    return <Image src={cvPhoto} className={styles.myPhoto} />;
};
