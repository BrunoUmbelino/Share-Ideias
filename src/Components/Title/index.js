import React from "react";
import styled from "styled-components";

const styledTitle = styled.div`
  h1 {
    font-size: 2rem;
    color: aqua;
  }
`;

function Title({ message }) {
  return (
    <>
      <styledTitle data-testid="title">
        <h1>{message}</h1>
      </styledTitle>
    </>
  );
}

export default Title;
