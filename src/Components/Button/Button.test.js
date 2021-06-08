import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./index";

test("deve renderizar a mensagem corretamente", () => {
  const { getByTestId } = render(<Button message="CLICK ME" />);
  const btnEl = getByTestId("btn");
  expect(btnEl.textContent).toBe("CLICK ME");
});
