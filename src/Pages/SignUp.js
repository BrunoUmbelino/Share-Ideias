import React from "react";
import { Button } from "../Components/Button";
import Container from "../Components/Container";
import {
  FormikField,
  FormikForm,
  FormikWrap,
  FormWrap,
  RedirectWrap,
  RowForm,
} from "../Components/Form/FormElements";
import Title from "../Components/Title";
import history from "../Routes/history";
import { RegisterAPI } from "../Services/api";

function SignUp() {
  return (
    <>
      <Container>
        <FormWrap>
          <FormikWrap
            initialValues={{ username: "", password: "" }}
            onSubmit={async (values) => {
              try {
                const response = await RegisterAPI(values);
                console.log(response);
                if (response) {
                  alert("successfully registered user.");
                  history.push("/sign-in");
                }
              } catch (error) {
                console.log(error);
              }
            }}
          >
            <FormikForm>
              <RowForm>
                <Title message="Sign up" alignEnd />
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
                <Button type="submit">Register</Button>
              </RowForm>
            </FormikForm>
          </FormikWrap>
          <RowForm>
            <RedirectWrap>
              <a href="/sign-in">Sign In</a>
              <a href="/forgot-pass">Forgot password?</a>
            </RedirectWrap>
          </RowForm>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignUp;
