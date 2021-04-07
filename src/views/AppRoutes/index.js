import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Components
import MainLayout from "layouts/Main";
import AuthLayout from "layouts/Auth";
import Search from "views/Home/Search";
import Signin from "views/Authentication/Signin";
import Signup from "views/Authentication/Signup";
import ActivityDetail from "views/ActivityDetail";
import NotFound from "views/NotFound";
import ShareSummary from "views/TripSummary/ShareSummary";

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
        <ShareSummary />
      </Route>
      <Route exact path="/">
        <AuthLayout>
          <Search />
        </AuthLayout>
      </Route>
      <MainLayout />
      <Redirect to="/404" />
    </Switch>
  );
}

export default AppRoutes;
