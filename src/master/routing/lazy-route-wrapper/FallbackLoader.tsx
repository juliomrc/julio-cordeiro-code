import React, { useState } from "react";
import { CircularLoader } from "@components/loaders/circular-loader";
import { useCommonStyles } from "@resources/styles/useCommonStyles";
import { useDidMountTimeout } from "@modules/about/useDidMountTimeout";

export const FallbackLoader: React.FC = () => {
    const [showLoader, setShowLoader] = useState(false);
    const styles = useCommonStyles();

    useDidMountTimeout(() => {
        setShowLoader(true);
    }, 1500);

    return showLoader ? (
        <div className={styles.centeredFullContent}>
            <CircularLoader />
        </div>
    ) : null;
};
