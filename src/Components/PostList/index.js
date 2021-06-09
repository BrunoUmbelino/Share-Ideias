import React from "react";
import { posts } from "../../data";
import { PostsWrap } from "./PostListElements";
import TextItem from "../PostItem";

function index() {
  return (
    <PostsWrap>
      <ul>
        {posts.map((post) => (
          <TextItem key={post.id} post={post} />
        ))}
      </ul>
    </PostsWrap>
  );
}

export default index;
