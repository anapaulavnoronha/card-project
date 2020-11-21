import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from "./App";
import AddCandidate from "./pages/AddCandidate";
import history from "./history";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-candidate" component={AddCandidate} />
      </Switch>
    </Router>
  );
};

export default Routes;
