import React from "react";
import { Image } from "@components/image";
import { Typography } from "@components/text/typography";
import { useMyPhotoStyles } from "./useMyPhotoStyles";
import cvPhoto from "./CV_Photo_200.png";

export const MyPhoto: React.FC = () => {
    const styles = useMyPhotoStyles();
    return (
        <div className={styles.container}>
            <Image
                height={"200px"}
                width={"200px"}
                src={cvPhoto}
                className={styles.photo}
            />
            <Typography className={styles.description}>
                Hey, this is me!
            </Typography>
        </div>
    );
};
