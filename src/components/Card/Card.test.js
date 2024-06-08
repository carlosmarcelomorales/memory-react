import { Card } from "./Card";
import { fireEvent, render, screen } from "@testing-library/react";

const mockOnClick = jest.fn();

const cardProps = {
  contributor: {
    id: 1,
    avatar: "https://example.com/avatar1.png",
  },
  onClick: mockOnClick,
  flipped: false,
};

test("renders card front and back", () => {
  render(<Card {...cardProps} />);
  expect(
    screen.getByAltText("https://example.com/avatar1.png"),
  ).toBeInTheDocument();
});

test("Calls onClick when card is clicked", () => {
  render(<Card {...cardProps} />);
  fireEvent.click(screen.getByAltText("https://example.com/avatar1.png"));
  expect(mockOnClick).toBeCalled();
});

test("adds flipped class when flipped is true", () => {
  const { container } = render(<Card {...cardProps} flipped={true} />);
  expect(container.firstChild).toHaveClass("flipped");
});
