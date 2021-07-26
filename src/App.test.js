import { render, screen } from "@testing-library/react";
import App from "./App";

test("screen renders correctly", () => {
  render(<App />);
  const linkElement = screen.getByText(/Test Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
