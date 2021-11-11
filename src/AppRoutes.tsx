import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import LoginScreen from "./screens/LoginScreen";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <AuthRoute exact path="/" component={LoginScreen} />
        <Route exact path="/login" component={LoginScreen} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
