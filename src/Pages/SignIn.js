import React, { useContext } from "react";
import { Context } from "../Context/AuthContext";

import Container from "../Components/Container";
import {
  RowForm,
  FormikField,
  FormikForm,
  FormikWrap,
  FormWrap,
  RedirectWrap,
  Error,
} from "../Components/Form/FormElements";
import Title from "../Components/Title";
import { Button } from "../Components/Button";

function SignIn() {
  const { handleLogin, loginError } = useContext(Context);
  return (
    <>
      <Container>
        <FormWrap>
          <FormikWrap
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => {
              handleLogin(values);
            }}
          >
            <FormikForm>
              <RowForm>
                <Title message="Sign in" />
              </RowForm>
              <Error>{loginError}</Error>
              <RowForm>
                <FormikField
                  name="username"
                  type="text"
                  placeholder="Username"
                />
              </RowForm>
              <RowForm>
                <FormikField
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </RowForm>
              <RowForm>
                <Button type="submit">Submit</Button>
              </RowForm>
            </FormikForm>
          </FormikWrap>
          <RowForm>
            <RedirectWrap>
              <div>
                <a href="/sign-up">Sign up</a>
              </div>
              <div>
                <a href="/forgot-pass">Forgot password?</a>
              </div>
            </RedirectWrap>
          </RowForm>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignIn;
