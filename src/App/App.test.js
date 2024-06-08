import React, { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import * as useContributorsModule from "../hooks/useContributors";

jest.mock("../hooks/useContributors");

const contributorsMock = [
  { id: 1, avatar: "https://example.com/avatar1.png" },
  { id: 2, avatar: "https://example.com/avatar2.png" },
  { id: 3, avatar: "https://example.com/avatar3.png" },
  { id: 4, avatar: "https://example.com/avatar4.png" },
  { id: 5, avatar: "https://example.com/avatar5.png" },
  { id: 6, avatar: "https://example.com/avatar6.png" },
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
