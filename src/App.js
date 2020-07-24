import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./pages/login/Login";
import Navigation from "./pages/Navigation/Navigation";
import BreadCrumbs from "./components/breadcrumb/BreadCrumbs";

const App = () => {
  return (
    <div>
      {/* <Breadcrumbs>
        {items.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </Breadcrumbs> */}
      <Router>
        <Switch>
          <Route exact path="/" name="login" component={Login} />
          <Navigation />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
