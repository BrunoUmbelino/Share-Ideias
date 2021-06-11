import React, { useContext, useEffect, useState } from "react";
import Container from "../Components/Container";
import NewPost from "../Components/NewPost";
import Posts from "../Components/PostList";
import Title from "../Components/Title";
import { IoLogOut } from "react-icons/io5";
import { FeedsAPI } from "../Services/api";
import styled from "styled-components";

import { Context } from "../Context/AuthContext";

function Main() {
  const [allPosts, setAllPosts] = useState([]);
  const { handleLogout } = useContext(Context);

  async function handlePosts() {
    try {
      const posts = await FeedsAPI();
      setAllPosts([...posts]);
      console.log(allPosts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function handlePosts() {
      try {
        const posts = await FeedsAPI();
        setAllPosts([...posts]);
        console.log(allPosts);
      } catch (error) {
        console.log(error);
      }
    }

    handlePosts();
  }, [allPosts]);

  return (
    <>
      <Container>
        <LogOutWrap>
          <IoLogOut onClick={handleLogout} color={`var(--white)`} />
        </LogOutWrap>
        <Title message="Share Your Mind" shadow />
        <NewPost handlePosts={handlePosts} />
        <Posts allPosts={allPosts} handlePosts={handlePosts} />
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
