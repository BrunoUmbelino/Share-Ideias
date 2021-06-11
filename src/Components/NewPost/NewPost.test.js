import React, { Component } from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewPost from "./index";

test("input must start empty", () => {
  const { getByTestId } = render(<NewPost />);
  const inputEl = getByTestId("input");
  expect(inputEl.textContent).toBe("");
});

test("input must change value correctly", () => {
  const { getByTestId } = render(<NewPost />);
  const inputEl = getByTestId("input");
  fireEvent.change(inputEl, {
    target: { value: "No meio do caminho tinha uma pedra" },
  });
  expect(inputEl.textContent).toBe("No meio do caminho tinha uma pedra");
});
