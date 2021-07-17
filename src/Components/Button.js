import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  color: var(--white);
  background: var(--green);
  font-size: 1.4rem;
  border: none;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
`;
