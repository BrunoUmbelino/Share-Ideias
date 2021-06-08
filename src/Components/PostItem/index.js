import React from "react";
import { ListItem } from "./PostItem";
import {
  IoPersonCircleOutline,
  IoThumbsUpSharp,
  IoHeartSharp,
} from "react-icons/io5";

function TextItem({ post }) {
  return (
    <ListItem key={post.id}>
      <div>
        <IoPersonCircleOutline />
        {post.id}
      </div>
      <div>{post.content}</div>
      <div>
        <IoThumbsUpSharp />
        <IoHeartSharp />
      </div>
    </ListItem>
  );
}

export default TextItem;
