import { render, screen } from "@testing-library/react";
import { DefeatScreen } from "./DefeatScreen";

test("renders lost screen", () => {
  render(<DefeatScreen />);
  expect(screen.getByText(/You Lost/i)).toBeInTheDocument();
});
