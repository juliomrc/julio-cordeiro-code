import React from "react";
import { routes } from "@resources/constants/routes";
import { Route } from "react-router-dom";
import { AsyncAbout } from "@modules/about/AsyncAbout";
import { AsyncHomepage } from "@modules/homepage/AsyncHomepage";
import { AsyncContact } from "@modules/contact/AsyncContact";
import { AsyncNoMatch } from "@modules/no-match/AsyncNoMatch";
import { LazyRouteWrapper } from "./LazyRouteWrapper";
import { AnimatedSwitch } from "./animated-switch";
import { AsyncWork } from "@modules/work/AsyncWork";
import { AsyncSkills } from "@modules/skills/AsyncSkills";

export const Routing: React.FC = () => {
    return (
        <LazyRouteWrapper>
            <AnimatedSwitch>
                <Route exact path={routes.homepage} component={AsyncHomepage} />
                <Route exact path={routes.work} component={AsyncWork} />
                <Route exact path={routes.about} component={AsyncAbout} />
                <Route exact path={routes.contact} component={AsyncContact} />
                <Route exact path={routes.skills} component={AsyncSkills} />
                <Route component={AsyncNoMatch} />
            </AnimatedSwitch>
        </LazyRouteWrapper>
    );
};
