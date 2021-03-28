import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Components
import MainLayout from "layouts/Main";
import Home from "views/Home";
import MainMap from "views/MainMap";
import FullScreenMap from "template/Maps/FullScreenMap";
import Signin from "views/Authentication/Signin";
import Signup from "views/Authentication/Signup";

function App() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/map" component={FullScreenMap} />
      <Route path="/" component={MainLayout} />
      <Redirect from="/" to="/home" />
    </Switch>
  );
}

export default App;
