import React from "react";
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
import { ReactionAPI } from "../../Services/api";

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
      const response = await ReactionAPI(reactionData);
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
      <UserName data-testid="author">{post.author.username}</UserName>
      <Content data-testid="content">{post.content}</Content>
      <Reactions>
        <ReactionWrap>
          <div className={post.likes && "like"}>
            <IoThumbsUpSharp onClick={() => handleReaction("like")} />
            <span data-testid="likes">{post.likes}</span>
          </div>
        </ReactionWrap>
        <ReactionWrap>
          <div className={post.loves && "love"}>
            <IoHeartSharp onClick={() => handleReaction("love")} />
            <span data-testid="loves">{post.loves}</span>
          </div>
        </ReactionWrap>
      </Reactions>
    </ListItem>
  );
}

export default PostItem;
