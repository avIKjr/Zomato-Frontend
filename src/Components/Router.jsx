import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import FilterPage from "./Filter";
import Details from "./Details";
import Home from "./Home";
import NoPage from "./NoPage";
class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/filter" component={FilterPage} />
          <Route path="/details" component={Details} />
          <Route component={NoPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Router;
