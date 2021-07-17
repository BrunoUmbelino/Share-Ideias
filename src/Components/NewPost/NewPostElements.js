import styled from "styled-components";

export const NewPostBlock = styled.div`
  display: grid;
  grid-template-areas:
    "user input"
    "user btn";
  grid-template-columns: 1fr 6fr;
  width: 100%;
  border: 1px solid black;
  padding: 2rem;
  border-radius: 1rem;
  background: var(--black);
  color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const UserPhoto = styled.div`
  svg {
    font-size: 4rem;
  }
  grid-area: user;
  padding: 1rem;

  @media screen and (max-width: 500px) {
    svg {
      font-size: 2rem;
    }
  }
`;

export const Input = styled.textarea`
  width: 100%;
  height: 80px;
  grid-area: input;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  outline: none;
  ::placeholder {
    font-size: 1.2rem;
    color: #5e5e5e;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  background-color: var(--green);
  color: var(--white);
  grid-area: btn;
  border-radius: 8px;
  padding: 10px;
  font-size: 1.2rem;
  border: none;

  &:hover {
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: var(--greenDark);
  }
`;
