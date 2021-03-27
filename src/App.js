import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Components
import AdminLayout from "layouts/Admin";
import Home from "views/Home";

function App() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/" component={AdminLayout} />
      <Redirect from="/" to="/home" />
    </Switch>
  );
}

export default App;
