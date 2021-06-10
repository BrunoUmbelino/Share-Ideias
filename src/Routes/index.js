import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Main from "../Pages/Main";
import ForgotPass from "../Pages/ForgotPass";

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
        <CustomRoute exact path="/sign-in" component={SignIn} />
        <CustomRoute exact path="/sign-up" component={SignUp} />
        <CustomRoute exact path="/forgot-pass" component={ForgotPass} />
      </Switch>
    </>
  );
}

export default index;
