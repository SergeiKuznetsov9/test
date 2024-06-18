import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

test("render component", () => {
  render(<Counter />);
  const header = screen.getByText(/counter/i);
  expect(header).toBeInTheDocument();
});
