import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PostItem from "./index";

const postItem = {
  author: { username: "juquinha" },
  content: "hello world",
  likes: 3,
  loves: 0,
};

test("must render author post correctly", () => {
  const { getByTestId } = render(<PostItem post={postItem} />);
  const authorEl = getByTestId("author");
  expect(authorEl.textContent).toBe("juquinha");
});

test("must render content post correctly", () => {
  const { getByTestId } = render(<PostItem post={postItem} />);
  const contentEl = getByTestId("content");
  expect(contentEl.textContent).toBe("hello world");
});

test("must render likes post correctly", () => {
  const { getByTestId } = render(<PostItem post={postItem} />);
  const likesEl = getByTestId("likes");
  expect(likesEl.textContent).toBe("3");
});

test("must render loves post correctly", () => {
  const { getByTestId } = render(<PostItem post={postItem} />);
  const lovesEl = getByTestId("loves");
  expect(lovesEl.textContent).toBe("0");
});
