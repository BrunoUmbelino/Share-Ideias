import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  h1 {
    color: var(--black);
    margin-bottom: 20px;
    width: 100%;
    text-align: ${(props) => (props.alignEnd ? `end` : ``)};
    text-shadow: ${(props) =>
      props.shadow
        ? "rgba(0, 0, 0, 0.25) 0px 14px 28px,rgba(0, 0, 0, 0.22) 0px 10px 10px"
        : ""};
  }
`;

function Title({ message, alignEnd, shadow }) {
  return (
    <>
      <StyledTitle alignEnd={alignEnd} shadow={shadow}>
        <h1 data-testid="title">{message}</h1>
      </StyledTitle>
    </>
  );
}

export default Title;
