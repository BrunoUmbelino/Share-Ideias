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
import { ForgotPasswordAPI } from "../Services/api";

function ForgotPass() {
  return (
    <>
      <Container>
        <FormWrap>
          <FormikWrap
            initialValues={{ username: "" }}
            onSubmit={async (values) => {
              try {
                const response = await ForgotPasswordAPI(values);
                if (response.data) {
                  alert(JSON.stringify(response.data, null, 2));
                } else {
                  throw new Error("User not found");
                }
              } catch (error) {
                console.log(error);
                alert(JSON.stringify(error.message, null, null));
              }
            }}
          >
            <FormikForm>
              <RowForm>
                <Title message="Forgot Password" />
              </RowForm>
              <RowForm>
                <FormikField
                  name="username"
                  type="text"
                  placeholder={"Enter your username"}
                />
              </RowForm>
              <RowForm>
                <Button type="submit">Submit</Button>
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
