import React from "react";
import { PostsWrap } from "./PostListElements";
import TextItem from "../PostItem";

function index({ allPosts, handlePosts }) {
  console.table(allPosts[0]);
  return (
    <PostsWrap>
      <ul>
        {allPosts.map((post) => (
          <TextItem key={post.id} post={post} handlePosts={handlePosts} />
        ))}
      </ul>
    </PostsWrap>
  );
}

export default index;
