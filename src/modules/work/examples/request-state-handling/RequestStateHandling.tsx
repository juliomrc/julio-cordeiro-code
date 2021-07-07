import React from "react";
import { Typography } from "@components/text/typography";
import { FetchExamples } from "./fetch-examples";

export const RequestStateHandling: React.FC = () => {
    return (
        <>
            <Typography>
                Every non-static website has some sort of fetching to a backend
                server. These asynchronous requests to the BE might take some
                time to complete, especially in slower connections, and
                eventually a request can and will certainly fail. Therefore, it
                is crucial that every request to the BE has some sort of of
                "state" handling.
            </Typography>
            <Typography>
                In these scenarios, it is important that the user understands
                what is going on, through some loaders and some error messages,
                and it is important that such mechanism is handled quite easily
                by the programmer. After all, it most likely will be used very
                often in the website.
            </Typography>
            <Typography>
                P.S: With concurrent React, this will most likely be outdated in
                it's current form.
            </Typography>
            <FetchExamples />
        </>
    );
};
