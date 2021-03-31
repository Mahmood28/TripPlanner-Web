import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
// Components
import MainLayout from "layouts/Main";
import Home from "views/Home";
import Signin from "views/Authentication/Signin";
import Signup from "views/Authentication/Signup";
import LoginPage from "views/Authentication/LoginPage";
// import TripHistory from "views/TripHistory";
function App() {
  return (
    <ToastProvider>
      <Switch>
        {/* <Route path="/history" component={TripHistory} /> */}
        <Route path="/home" component={Home} /> 
        {/* <Route path="/signin">
          <Signin><LoginPage /></Signin>
          </Route> */}
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={MainLayout} />
        <Redirect from="/" to="/home" />
      </Switch>
    </ToastProvider>
  );
}

export default App;
