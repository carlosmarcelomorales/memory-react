import React from "react";
import { render, screen } from "@testing-library/react";
import { VictoryScreen } from "./VictoryScreen";

test("renders victory screen", () => {
  render(<VictoryScreen />);
  expect(screen.getByText(/Congratulations!/i)).toBeInTheDocument();
});
