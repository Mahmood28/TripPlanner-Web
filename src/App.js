import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
// Components
import MainLayout from "layouts/Main";
import AuthLayout from "layouts/Auth";
import Home from "views/Home";
import Signin from "views/Authentication/Signin";
import Signup from "views/Authentication/Signup";
import ActivityDetail from "views/ActivityDetail";

function App() {
  return (
    <ToastProvider>
      <Switch>
        <Route path="/activities/:activitySlug">
          <MainLayout>
            <ActivityDetail />
          </MainLayout>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <MainLayout />
        </Route>
        {/* <Route path="/" component={MainLayout} /> */}
        <Redirect from="/" to="/home" />
      </Switch>
    </ToastProvider>
  );
}

export default App;
