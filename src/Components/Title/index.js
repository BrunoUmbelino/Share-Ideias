import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  h1 {
    color: red;
  }
`;

function Title({ message }) {
  return (
    <>
      <StyledTitle>
        <h1 data-testid="title">{message}</h1>
      </StyledTitle>
    </>
  );
}

export default Title;
