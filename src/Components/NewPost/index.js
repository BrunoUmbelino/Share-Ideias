import React, { useState } from "react";
import { NewPostBlock, Input, SubmitBtn, UserPhoto } from "./NewPostElements";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Feed } from "../../Services/api";

function Form({ handlePosts }) {
  const [newPost, setNewPost] = useState("");
  console.log(newPost);

  async function handleSubmit() {
    try {
      const response = await Feed(newPost);
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
          placeholder="What are you thinking about today?"
          onChange={(e) => setNewPost(e.target.value)}
          value={newPost}
        />
        <SubmitBtn onClick={handleSubmit}>Submit you text</SubmitBtn>
      </NewPostBlock>
    </>
  );
}

export default Form;
