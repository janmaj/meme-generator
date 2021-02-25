import TemplateTile from "./TemplateTile";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("renders without crashing", () => {
  render(<TemplateTile imageUrl="" />);
});

it("renders the correct image", () => {
  render(<TemplateTile imageUrl="http://domain.com/image-url" />);

  expect(screen.getByRole("img").getAttribute("src")).toBe(
    "http://domain.com/image-url"
  );
});

it("renders image with correct alt attribute", () => {
  render(<TemplateTile imageUrl="" imageAlt="A template" />);

  expect(screen.getByRole("img").getAttribute("alt")).toBe("A template");
});

it("triggers onClick when clicked", () => {
  const mockedOnClick = jest.fn();
  render(<TemplateTile imageUrl="" onClick={mockedOnClick} />);

  userEvent.click(screen.getByTestId("template-card"));
  expect(mockedOnClick).toBeCalledTimes(1);
});
