import styled from "styled-components";
import { Formik, Form, Field } from "formik";

export const FormWrap = styled.div`
  padding: 2rem;
  ///border: 1px solid white;
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const FormikWrap = styled(Formik)``;

export const FormikForm = styled(Form)``;

export const RowForm = styled.div`
  height: 50px;
  margin-bottom: 20px;
`;

export const FormikField = styled(Field)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const FormButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const RedirectWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  a {
    color: white;
  }
`;

export const Error = styled.div`
  color: red;
  padding: 10px;
`;
