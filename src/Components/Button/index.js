import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  width: 100%;
  height: 25px;
  background-color: greenyellow;
`;

function Button({ message }) {
  return <StyledBtn data-testid="btn">{message}</StyledBtn>;
}

export default Button;
