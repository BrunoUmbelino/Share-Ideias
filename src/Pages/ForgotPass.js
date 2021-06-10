import React from "react";
import Container from "../Components/Container";
import {
  FormikField,
  FormikForm,
  FormikWrap,
  FormWrap,
  RedirectWrap,
  RowForm,
  FormButton,
} from "../Components/Form/FormElements";
import Title from "../Components/Title";

function ForgotPass() {
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
                <Title message="Forgot Password" />
              </RowForm>
              <RowForm>
                <FormikField name="username" type="text" />
              </RowForm>
              <RowForm>
                <FormButton type="submit">Submit</FormButton>
              </RowForm>
            </FormikForm>
          </FormikWrap>
          <RowForm>
            <RedirectWrap>
              <a href="/sign-in">Sign in</a>
              <a href="/sign-up">Sign up</a>
            </RedirectWrap>
          </RowForm>
        </FormWrap>
      </Container>
    </>
  );
}

export default ForgotPass;
