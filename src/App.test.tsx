import { screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { App } from "./App";
import { render } from "./test-utils";

test("increments counter", async () => {
  render(<App />);
  const counterLabel = screen.getByLabelText("Counter");
  expect(counterLabel).toHaveTextContent("0");

  act(() => {
    screen.getByRole("button", { name: "Increment" }).click();
  });
  await waitFor(() => expect(counterLabel).toHaveTextContent("1"));
});
