import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Main from "../Pages/Main";
import ForgotPass from "../Pages/ForgotPass";
import { Context } from "../Context/AuthContext";

function index() {
  function CustomRoute({ isPrivate, ...rest }) {
    const { authenticated, loading } = useContext(Context);
    console.log("auth", authenticated);

    if (loading) {
      return <h1>Loading</h1>;
    }

    if (isPrivate && !authenticated) {
      return <Redirect to="/sign-in" />;
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
