import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Main from "../Pages/Main";
import ForgotPass from "../Pages/ForgotPass";
import { Context } from "../Context/AuthContext";
import Loading from "../Pages/Loading";

function index() {
  function CustomRoute({ isPrivate, ...rest }) {
    const { authenticated, loading } = useContext(Context);
    console.log("auth", authenticated);

    if (loading) {
      return <Loading />;
    }

    if (isPrivate && !authenticated) {
      return <Redirect to="/sign-in" />;
    }

    return <Route {...rest} />;
  }

  return (
    <>
      <Switch>
        <CustomRoute exact path="/sign-in" component={SignIn} />
        <CustomRoute exact path="/sign-up" component={SignUp} />
        <CustomRoute exact path="/forgot-pass" component={ForgotPass} />
        <CustomRoute isPrivate exact path="/" component={Main} />
      </Switch>
    </>
  );
}

export default index;
