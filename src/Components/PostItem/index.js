import React, { useState } from "react";
import {
  Content,
  Reactions,
  UserName,
  UserPhoto,
  ListItem,
  ReactionWrap,
} from "./style";
import {
  IoPersonCircleOutline,
  IoThumbsUpSharp,
  IoHeartSharp,
} from "react-icons/io5";
import { Reaction } from "../../Services/api";

function PostItem({ post, handlePosts }) {
  async function handleReaction(reaction) {
    const reactionData = {
      feedId: post.id,
      like: post.likes,
      love: post.loves,
    };

    if (reaction === "like") reactionData.like = true;
    if (reaction === "love") reactionData.love = true;

    try {
      const response = await Reaction(reactionData);
      console.log(response);
      if (response) handlePosts();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ListItem>
      <UserPhoto>
        <IoPersonCircleOutline />
      </UserPhoto>
      <UserName>{post.author.username}</UserName>
      <Content>{post.content}</Content>
      <Reactions>
        <ReactionWrap>
          <IoThumbsUpSharp onClick={() => handleReaction("like")} />
          <span> {post.likes}</span>
        </ReactionWrap>
        <ReactionWrap>
          <IoHeartSharp onClick={() => handleReaction("love")} />
          <span> {post.loves}</span>
        </ReactionWrap>
      </Reactions>
    </ListItem>
  );
}

export default PostItem;
