import React from "react";
import { routes } from "@resources/constants/routes";
import { Route } from "react-router-dom";
import { AsyncAbout } from "@modules/about/AsyncAbout";
import { AsyncHomepage } from "@modules/homepage/AsyncHomepage";
import { AsyncContact } from "@modules/contact/AsyncContact";
import { AsyncNoMatch } from "@modules/no-match/AsyncNoMatch";
import { LazyRouteWrapper } from "./LazyRouteWrapper";
import { AnimatedSwitch } from "./animatedSwitch";
import { AsyncWork } from "@modules/work/AsyncWork";

export const Routing: React.FC = () => {
    return (
        <LazyRouteWrapper>
            <AnimatedSwitch>
                <Route exact path={routes.about}>
                    <AsyncAbout />
                </Route>
                <Route exact path={routes.contact}>
                    <AsyncContact />
                </Route>
                <Route exact path={routes.homepage}>
                    <AsyncHomepage />
                </Route>
                <Route exact path={routes.work}>
                    <AsyncWork />
                </Route>
                <Route>
                    <AsyncNoMatch />
                </Route>
            </AnimatedSwitch>
        </LazyRouteWrapper>
    );
};
