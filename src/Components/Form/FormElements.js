import styled from "styled-components";
import { Formik, Form, Field } from "formik";

export const FormWrap = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 15px;
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
  border-radius: 4px;
  border: var(--green) solid 2px;
  background: var(--gray);
  color: var(--white);
  padding: 10px;
  font-size: 1.4rem;

  &:focus {
    outline: var(--green) solid 2px;
  }
`;

export const RedirectWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    color: var(--black);
    font-size: 1.2rem;
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid var(--black);
    }
  }
`;

export const Error = styled.div`
  color: #ff5d5d;
  font-size: 1rem;
`;
