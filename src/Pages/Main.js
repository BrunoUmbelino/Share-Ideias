import React, { useContext, useEffect, useState } from "react";
import Container from "../Components/Container";
import NewPost from "../Components/NewPost";
import Posts from "../Components/PostList";
import Title from "../Components/Title";
import { IoLogOutOutline } from "react-icons/io5";
import {
  //LoginAPI,
  //RegisterAPI,
  //ForgotPasswordAPI,
  Feeds,
  //Feed,
  ///Reaction,
} from "../Services/api";
import styled from "styled-components";

import { Context } from "../Context/AuthContext";

function Main() {
  ///LoginAPI();
  //RegisterAPI();
  ///ForgotPasswordAPI("bruno-umbelino");
  ///Feeds();
  ///Feed();
  ///Reaction();
  const [posts, setPosts] = useState(null);
  const { handleLogout } = useContext(Context);
  useEffect(() => {
    async function handlePosts() {
      const response = await Feeds();
    }
    handlePosts();
  }, []);

  return (
    <>
      <Container>
        <LogOutWrap>
          <IoLogOutOutline onClick={handleLogout} />
        </LogOutWrap>
        <Title message="What's on your mind?" />
        <NewPost />
        <Posts />
      </Container>
    </>
  );
}

const LogOutWrap = styled.div`
  color: white;
  font-size: 2rem;
  width: 100%;
  text-align: end;

  & :hover {
    cursor: pointer;
  }
`;

export default Main;
