import React from "react";
import { useSelector } from "react-redux";
// eslint-disable-next-line import/named
import { Redirect, Route, RouteProps } from "react-router-dom";
import { userSelector } from "../redux/reducers/user/selectors";

const AuthRoute = ({ ...routeProps }: RouteProps): JSX.Element => {
  const { user } = useSelector(userSelector);

  if (user.jwtToken != "") {
    return <Route {...routeProps} />;
  }
  return <Redirect to="/login" />;
};

export default AuthRoute;
