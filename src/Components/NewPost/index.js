import React, { useState } from "react";
import { NewPostBlock, Input, SubmitBtn, UserPhoto } from "./NewPostElements";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FeedAPI } from "../../Services/api";

function Form({ handlePosts }) {
  const [newPost, setNewPost] = useState("");

  async function handleSubmit() {
    try {
      const response = await FeedAPI(newPost);
      if (response) handlePosts();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <NewPostBlock>
        <UserPhoto>
          <IoPersonCircleOutline />
        </UserPhoto>
        <Input
          name="text"
          type="text"
          placeholder="What are you thinking about right now?"
          onChange={(e) => setNewPost(e.target.value)}
          value={newPost}
          data-testid="input"
        />
        <SubmitBtn type="button" onClick={handleSubmit}>
          Share with the world!
        </SubmitBtn>
      </NewPostBlock>
    </>
  );
}

export default Form;
