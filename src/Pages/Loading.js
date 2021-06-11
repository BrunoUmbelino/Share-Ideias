import React from "react";
import styled from "styled-components";

export const LoadingWrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
`;

function Loading() {
  return (
    <>
      <LoadingWrap>
        <h1>LOADING...</h1>
      </LoadingWrap>
    </>
  );
}

export default Loading;
