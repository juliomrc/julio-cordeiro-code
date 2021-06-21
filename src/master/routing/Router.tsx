import React from "react";
import { routes } from "@resources/constants/routes";
import { BrowserRouter, Route } from "react-router-dom";
import { AsyncAbout } from "@modules/about/AsyncAbout";
import { AsyncHomepage } from "@modules/homepage/AsyncHomepage";
import { LazyRouteWrapper } from "./LazyRouteWrapper";
import { AnimatedSwitch } from "./AnimatedSwitch";

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <LazyRouteWrapper>
                <AnimatedSwitch>
                    <Route path={routes.about}>
                        <AsyncAbout />
                    </Route>
                    <Route path={routes.homepage}>
                        <AsyncHomepage />
                    </Route>
                    <Route>
                        <div>Ups, no route matched</div>
                    </Route>
                </AnimatedSwitch>
            </LazyRouteWrapper>
        </BrowserRouter>
    );
};
