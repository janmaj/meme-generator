import ConfirmationDialog from "./ConfirmationDialog";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

it("renders without crashing", () => {
  render(
    <ConfirmationDialog open={true} onClose={() => {}} onConfirm={() => {}} />
  );
});

it("displays the correct image", () => {
  render(
    <ConfirmationDialog
      open={true}
      onClose={() => {}}
      onConfirm={() => {}}
      imageUrl="test-url"
      imageAlt="test-alt"
    />
  );
  expect(screen.getByAltText("test-alt").getAttribute("src")).toBe("test-url");
});

it("Is hidden when the open prop is false", () => {
  render(
    <ConfirmationDialog open={false} onClose={() => {}} onConfirm={() => {}} />
  );
  expect(screen.queryByTestId("confirmation-dialog")).toBeNull();
});

it("triggers onClose when closed", () => {
  const mockedOnClose = jest.fn();

  render(
    <ConfirmationDialog
      open={true}
      onClose={mockedOnClose}
      onConfirm={() => {}}
    />
  );

  userEvent.click(screen.getByText(/ancel/));
  expect(mockedOnClose).toHaveBeenCalledTimes(1);
});

it("triggers onConfirm after confirmation", () => {
  const mockedOnConfirm = jest.fn();

  render(
    <ConfirmationDialog
      open={true}
      onClose={() => {}}
      onConfirm={mockedOnConfirm}
    />
  );

  userEvent.click(screen.getByText(/go/));
  expect(mockedOnConfirm).toHaveBeenCalledTimes(1);
});
