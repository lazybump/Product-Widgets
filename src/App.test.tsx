import { render, screen } from "@testing-library/react";
import App from "./App";

it("should contain hello world text", () => {
  render(<App />);

  const title = screen.getByText(/Hello world/i);

  expect(title).toBeVisible();
});
