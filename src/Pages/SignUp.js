import React from "react";
import Container from "../Components/Container";
import {
  FormikField,
  FormikForm,
  FormikWrap,
  FormWrap,
  RedirectWrap,
  FormGroup,
  RowForm,
  FormButton,
} from "../Components/Form/FormElements";
import Title from "../Components/Title";

function SignUp() {
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
                <Title message="Sign up" />
              </RowForm>
              <RowForm>
                <FormikField name="username" type="text" />
              </RowForm>
              <RowForm>
                <FormikField name="password" type="password" />
              </RowForm>
              <RowForm>
                <FormButton type="submit">Submit</FormButton>
              </RowForm>
            </FormikForm>
          </FormikWrap>
          <RowForm>
            {" "}
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
