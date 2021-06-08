import React from "react";
import Container from "../Components/Container";
import NewPost from "../Components/NewPost";
import Posts from "../Components/PostList";
import Title from "../Components/Title";

function Main() {
  return (
    <>
      <Container>
        <Title message="Texts of day" />
        <NewPost />
        <Posts />
      </Container>
    </>
  );
}

export default Main;
