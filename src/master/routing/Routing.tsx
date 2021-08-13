import React from "react";
import { routes } from "@resources/constants/routes";
import { Route } from "react-router-dom";
import { LazyRouteWrapper } from "./lazy-route-wrapper";
import { AnimatedSwitch } from "./animated-switch";

import { AsyncAbout } from "@modules/about/AsyncAbout";
import { AsyncHomepage } from "@modules/homepage/AsyncHomepage";
import { AsyncContact } from "@modules/contact/AsyncContact";
import { AsyncNoMatch } from "@modules/no-match/AsyncNoMatch";
import { AsyncWork } from "@modules/work/AsyncWork";
import { AsyncSkills } from "@modules/skills/AsyncSkills";
import { AsyncThreeJS } from "@modules/three-js/AsyncThreeJs";
import { AsyncRecoil } from "@modules/recoil/AsyncRecoil";

export const Routing: React.FC = () => {
    return (
        <LazyRouteWrapper>
            <AnimatedSwitch>
                <Route exact path={routes.homepage} component={AsyncHomepage} />
                <Route exact path={routes.work} component={AsyncWork} />
                <Route exact path={routes.about} component={AsyncAbout} />
                <Route exact path={routes.contact} component={AsyncContact} />
                <Route exact path={routes.skills} component={AsyncSkills} />
                <Route exact path={routes.threeJS} component={AsyncThreeJS} />
                <Route exact path={routes.recoil} component={AsyncRecoil} />
                <Route component={AsyncNoMatch} />
            </AnimatedSwitch>
        </LazyRouteWrapper>
    );
};
