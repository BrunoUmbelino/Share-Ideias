import React from "react";
import { FormWrap, Input, SubmitBtn, UserPhoto } from "./NewPostElements";
import { IoPersonCircleOutline } from "react-icons/io5";

function Form() {
  return (
    <>
      <FormWrap>
        <UserPhoto>
          <IoPersonCircleOutline />
        </UserPhoto>
        <Input
          name="text"
          type="text"
          placeholder="What are you thinking about today? "
        />
        <SubmitBtn>Submit you text</SubmitBtn>
      </FormWrap>
    </>
  );
}

export default Form;
