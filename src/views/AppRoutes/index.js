import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Components
import MainLayout from "layouts/Main";
import AuthLayout from "layouts/Auth";
import Home from "views/Home";
import Signin from "views/Authentication/Signin";
import Signup from "views/Authentication/Signup";
import ActivityDetail from "views/ActivityDetail";
import NotFound from "views/NotFound";
import SharedTrip from "views/SharedTrip";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/404">
        <AuthLayout>
          <NotFound />
        </AuthLayout>
      </Route>
      <Route path="/activities/:activitySlug">
        <MainLayout>
          <ActivityDetail />
        </MainLayout>
      </Route>
      <Route path="/signin">
        <AuthLayout>
          <Signin />
        </AuthLayout>
      </Route>
      <Route path="/signup">
        <AuthLayout>
          <Signup />
        </AuthLayout>
      </Route>
      <Route exact path="/trips/:tripSlug">
        <SharedTrip />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <MainLayout />
      <Redirect to="/404" />
    </Switch>
  );
}

export default AppRoutes;
