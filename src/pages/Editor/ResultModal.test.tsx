import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultModal from "./ResultModal";
import userEvent from "@testing-library/user-event";

it("renders without errors", () => {
  render(
    <ResultModal
      imageUrl="test-url"
      imageAlt="test-name"
      open={true}
      onClose={() => {}}
    />
  );
});

it("renders the correct image", () => {
  render(
    <ResultModal
      imageUrl="test-url"
      imageAlt="test-name"
      open={true}
      onClose={() => {}}
    />
  );
  expect(screen.getByAltText("test-name").getAttribute("src")).toBe("test-url");
});

it("is hidden when the open prop is false", () => {
  render(
    <ResultModal
      imageUrl="test-url"
      imageAlt="test-name"
      open={true}
      onClose={() => {}}
    />
  );
  expect(screen.queryByTestId("result-modal")).not.toBeInTheDocument();
});

it("triggers onClose when closed", () => {
  const mockedOnClose = jest.fn();
  render(
    <ResultModal
      imageUrl="test-url"
      imageAlt="test-name"
      open={true}
      onClose={mockedOnClose}
    />
  );
  userEvent.click(screen.getByTestId("overlay"));
  expect(mockedOnClose).toHaveBeenCalledTimes(1);
});
