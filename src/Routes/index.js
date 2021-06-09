import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import Main from "../Pages/Main";

function index() {
  function CustomRoute({ isPrivate, ...rest }) {
    const auth = true;
    if (isPrivate && !auth) {
      return <Redirect to="/login" />;
    }
    return <Route {...rest} />;
  }

  return (
    <>
      <Switch>
        <CustomRoute isPrivate exact path="/" component={Main} />
        <CustomRoute exact path="/login" component={Login} />
        <CustomRoute exact path="/logout" component={Logout} />
      </Switch>
    </>
  );
}

export default index;
