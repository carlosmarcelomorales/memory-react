import { screen, render, fireEvent } from "@testing-library/react";
import { Menu } from "./Menu";

test("render menu screen", () => {
  const onStart = jest.fn();
  renderMenu(onStart());
  expect(screen.getByText(/Github Memory/i)).toBeInTheDocument();
  expect(screen.getByText(/Start Game/i)).toBeInTheDocument();
});

test("starts game when button is clicked", () => {
  const onStart = jest.fn();
  renderMenu(onStart());
  fireEvent.click(screen.getByText(/Start Game/i));
  expect(onStart).toHaveBeenCalled();
});

const renderMenu = (onStart) => render(<Menu startGame={onStart} />);
