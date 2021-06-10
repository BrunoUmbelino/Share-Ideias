import styled from "styled-components";

export const NewPostWrap = styled.div`
  display: grid;
  grid-template-areas:
    "user input"
    "user btn";
  grid-template-columns: 1fr 6fr;
  width: 100%;
  border: 1px solid black;
  padding: 2rem;
  border-radius: 1rem;
`;

export const UserPhoto = styled.div`
  svg {
    font-size: 3rem;
  }
  grid-area: user;
  padding: 1rem;
`;

export const Input = styled.textarea`
  width: 100%;
  height: 50px;
  grid-area: input;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 25px;
  background-color: greenyellow;
  grid-area: btn;

  &:hover {
    cursor: pointer;
  }
`;
