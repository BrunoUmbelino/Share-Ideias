import React from "react";
import Button from "../Button/";
import { FormWrap, Input } from "./NewPostElements";
import { IoPersonCircleOutline } from "react-icons/io5";

function Form() {
  return (
    <>
      <FormWrap>
        <IoPersonCircleOutline />
        <Input
          name="text"
          type="text"
          placeholder="What are you thinking about today? "
        />
        <Button message="Submit you text" />
      </FormWrap>
    </>
  );
}

export default Form;
