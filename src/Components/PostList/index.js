import React from "react";
import { PostsWrap } from "./PostListElements";
import PostItem from "../PostItem";

function index({ allPosts, handlePosts }) {
  return (
    <PostsWrap>
      <ul>
        {allPosts.map((post) => (
          <PostItem key={post.id} post={post} handlePosts={handlePosts} />
        ))}
      </ul>
    </PostsWrap>
  );
}

export default index;
