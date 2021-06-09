import React from "react";
import {
  Content,
  Reactions,
  UserName,
  UserPhoto,
  LikeWrap,
  ListItem,
  LoveWrap,
} from "./style";
import {
  IoPersonCircleOutline,
  IoThumbsUpSharp,
  IoHeartSharp,
} from "react-icons/io5";

function TextItem({ post }) {
  return (
    <ListItem key={post.id}>
      <UserPhoto>
        <IoPersonCircleOutline />
      </UserPhoto>
      <UserName>{post.id}</UserName>
      <Content>{post.content}</Content>
      <Reactions>
        <LikeWrap>
          <IoThumbsUpSharp />
        </LikeWrap>
        <LoveWrap>
          <IoHeartSharp />
        </LoveWrap>
      </Reactions>
    </ListItem>
  );
}

export default TextItem;
