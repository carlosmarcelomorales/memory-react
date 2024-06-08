import { Board } from "./Board";
import { render, screen, fireEvent } from "@testing-library/react";

const contributorsMock = [
  { id: 1, avatar: "https://example.com/avatar1.png" },
  { id: 2, avatar: "https://example.com/avatar2.png" },
  { id: 3, avatar: "https://example.com/avatar1.png" },
  { id: 4, avatar: "https://example.com/avatar2.png" },
];

const mockOnMatch = jest.fn();

test("renders board with cards", () => {
  render(<Board contributors={contributorsMock} onMatch={mockOnMatch} />);

  expect(screen.getAllByRole("img")).toHaveLength(4);
});

test("flips cards and matches correctly", () => {
  render(<Board contributors={contributorsMock} onMatch={mockOnMatch} />);

  const cards = screen.getAllByRole("img");

  fireEvent.click(cards[0]);
  fireEvent.click(cards[2]);

  expect(cards[0].closest(".card")).toHaveClass("flipped");
  expect(cards[2].closest(".card")).toHaveClass("flipped");
});

test("does not flip more than two cards at a time", () => {
  render(<Board contributors={contributorsMock} onMatch={mockOnMatch} />);

  const cards = screen.getAllByRole("img");

  fireEvent.click(cards[0]);
  fireEvent.click(cards[1]);
  fireEvent.click(cards[2]);

  expect(cards[0].closest(".card")).toHaveClass("flipped");
  expect(cards[1].closest(".card")).toHaveClass("flipped");
  expect(cards[2].closest(".card")).not.toHaveClass("flipped");
});
