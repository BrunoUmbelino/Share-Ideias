import React from "react";
import { Input, NewPostWrap, SubmitBtn, UserPhoto } from "./NewPostElements";
import { IoPersonCircleOutline } from "react-icons/io5";

function Form() {
  return (
    <>
      <NewPostWrap>
        <UserPhoto>
          <IoPersonCircleOutline />
        </UserPhoto>
        <Input
          name="text"
          type="text"
          placeholder="What are you thinking about today? "
        />
        <SubmitBtn>Submit you text</SubmitBtn>
      </NewPostWrap>
    </>
  );
}

export default Form;
