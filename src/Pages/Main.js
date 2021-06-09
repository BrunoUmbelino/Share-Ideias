import React from "react";
import Container from "../Components/Container";
import NewPost from "../Components/NewPost";
import Posts from "../Components/PostList";
import Title from "../Components/Title";
import {
  LoginAPI,
  RegisterAPI,
  ForgotPasswordAPI,
  Feeds,
  Feed,
  Reaction,
} from "../Services/api";

function Main() {
  ///LoginAPI();
  //RegisterAPI();
  ///ForgotPasswordAPI("bruno-umbelino");
  ///Feeds();
  ///Feed();
  ///Reaction();
  return (
    <>
      <Container>
        <Title message="What's on your mind?" />
        <NewPost />
        <Posts />
      </Container>
    </>
  );
}

export default Main;
