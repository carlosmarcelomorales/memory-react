import { Countdown } from "./Countdown";
import { render, screen } from "@testing-library/react";
import { act } from "react";

const renderCountdown = (onTimeUp, time) =>
  render(<Countdown onTimeUp={onTimeUp} time={time} />);

test("calls onTimeUp when timer is zero", () => {
  const onTimeUp = jest.fn();
  jest.useFakeTimers();
  renderCountdown(onTimeUp, 1);
  act(() => {
    jest.advanceTimersByTime(2000);
  });
  expect(onTimeUp).toHaveBeenCalledTimes(1);
  jest.useRealTimers();
});

test("shows correct time left", () => {
  const onTimeUp = jest.fn();
  renderCountdown(onTimeUp, 10);
  expect(screen.getByText(/Time left: 10/i)).toBeInTheDocument();
});
