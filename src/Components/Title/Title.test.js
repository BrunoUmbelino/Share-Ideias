import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Title from "./index";

test("deve rederizar texto corretamente", () => {
  const { getByTestId } = render(<Title message="my title" />);
  const titleEl = getByTestId("title");
  expect(titleEl.textContent).toBe("my title");
});
