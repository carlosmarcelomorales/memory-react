import React, { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import * as useContributorsModule from "../hooks/useContributors";

jest.mock("../hooks/useContributors");

const contributorsMock = [
  { id: 1, avatar: "https://example.com/avatar1.png" },
  { id: 2, avatar: "https://example.com/avatar2.png" },
  { id: 3, avatar: "https://example.com/avatar3.png" },
  { id: 4, avatar: "https://example.com/avatar1.png" },
  { id: 5, avatar: "https://example.com/avatar2.png" },
  { id: 6, avatar: "https://example.com/avatar3.png" },
];

beforeEach(() => {
  useContributorsModule.useContributors.mockReturnValue({
    shuffledContributors: contributorsMock,
  });
});

const clickStartGame = () => fireEvent.click(screen.getByText(/Start Game/i));
const renderApp = () => render(<App />);

test("render start screen", () => {
  renderApp();
  expect(screen.getByText(/Github Memory/i)).toBeInTheDocument();
});

test("starts game and show initial screen", () => {
  renderApp();
  clickStartGame();
  expect(screen.getByText(/Time left:/i)).toBeInTheDocument();
  expect(screen.getByText(/Score:/i)).toBeInTheDocument();
});

test("show defeat screen when time is up", () => {
  jest.useFakeTimers();
  renderApp();
  clickStartGame();
  act(() => {
    jest.advanceTimersByTime(61000);
  });
  expect(screen.getByText(/You Lost/i)).toBeInTheDocument();
  jest.useRealTimers();
});

test("shows victory screen when all matches are found", () => {
  renderApp();
  fireEvent.click(screen.getByText(/Start Game/i));

  const cards = screen.getAllByRole("img");

  const pairs = [
    [0, 3],
    [1, 4],
    [2, 5],
  ];

  pairs.forEach(([first, second]) => {
    fireEvent.click(cards[first]);
    fireEvent.click(cards[second]);
  });

  expect(screen.getByText(/Congratulations!/i)).toBeInTheDocument();
});
