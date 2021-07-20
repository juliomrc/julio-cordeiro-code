import React from "react";
import { PageHeader } from "@components/text/page-header";
import { useCommonStyles } from "@resources/styles/useCommonStyles";
import { SectionParagraph } from "@components/text/section-paragraph";

interface ErrorInfoProps {
    error: Error | null;
    errorInfo: React.ErrorInfo;
}

export const ErrorInfo: React.FC<ErrorInfoProps> = ({ error, errorInfo }) => {
    const styles = useCommonStyles();
    return (
        <div className={styles.centeredFullContent}>
            <PageHeader>Ups! Something went wrong, obviously.</PageHeader>
            <SectionParagraph>
                This was not supposed to happen, please try again. If you are
                curious and insist to check out the error details go ahead, of
                course.
            </SectionParagraph>
            <details style={{ whiteSpace: "pre-wrap" }}>
                {error && error.toString()}
                <br />
                {errorInfo.componentStack}
            </details>
        </div>
    );
};
