import React from "react";
import Container from "../Components/Container";
import {
  FormButton,
  RowForm,
  FormikField,
  FormikForm,
  FormikWrap,
  FormWrap,
  RedirectWrap,
} from "../Components/Form/FormElements";
import Title from "../Components/Title";

function SignIn() {
  return (
    <>
      <Container>
        <FormWrap>
          <FormikWrap
            initialValues={{ username: "", password: "" }}
            onSubmit={async (values) => {
              await console.log(values);
            }}
          >
            <FormikForm>
              <RowForm>
                <Title message="Sign in" />
              </RowForm>
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
                <FormButton type="submit">Submit</FormButton>
              </RowForm>
            </FormikForm>
          </FormikWrap>
          <RowForm>
            <RedirectWrap>
              <a href="/sign-up">Sign up</a>
              <a href="/forgot-pass">Forgot password?</a>
            </RedirectWrap>
          </RowForm>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignIn;
