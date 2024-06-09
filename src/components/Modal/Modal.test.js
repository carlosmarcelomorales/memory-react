import { fireEvent, render, screen } from "@testing-library/react";
import { Modal } from "./Modal";

test("render children", () => {
  render(
    <Modal onClose={jest.fn()} onCloseModal={jest.fn()}>
      <div>Modal Content</div>
    </Modal>,
  );
  expect(screen.getByText("Modal Content")).toBeInTheDocument();
});

test("calls onCloseModal when the button close is clicked", () => {
  const onCloseModal = jest.fn();
  render(
    <Modal onClose={jest.fn()} onCloseModal={onCloseModal}>
      <div>Modal Content</div>
    </Modal>,
  );
  fireEvent.click(screen.getByText("Close"));
  expect(onCloseModal).toHaveBeenCalled();
});
