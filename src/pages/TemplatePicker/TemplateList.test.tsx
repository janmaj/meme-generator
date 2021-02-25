import TemplateList from "./TemplateList";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

it("renders without errors", () => {
  render(<TemplateList templates={[]} />);
});

it("Displays a message when the template list is empty", () => {
  render(<TemplateList templates={[]} />);
  expect(screen.getByText(/No/)).toBeInTheDocument();
});

it("Renders a correct number of tiles", () => {
  const templates = [
    {
      id: 420,
      url: "",
      boxCount: 2,
      name: "",
    },
    {
      id: 421,
      url: "",
      boxCount: 2,
      name: "",
    },
    {
      id: 422,
      url: "",
      boxCount: 2,
      name: "",
    },
  ];
  render(<TemplateList templates={templates} />);
  expect(screen.getAllByTestId("template-card")).toHaveLength(3);
});

it("renders tiles with the correct image", () => {
  const templates = [
    {
      id: 420,
      url: "http://domain.com/image-location",
      boxCount: 2,
      name: "",
    },
  ];
  render(<TemplateList templates={templates} />);

  expect(screen.getByRole("img").getAttribute("src")).toBe(
    "http://domain.com/image-location"
  );
});

it("calls onSelect with the correct argument", () => {
  const templates = [
    {
      id: 420,
      url: "http://domain.com/image-location",
      boxCount: 2,
      name: "",
    },
  ];
  const mockedOnSelect = jest.fn();
  render(<TemplateList templates={templates} onSelect={mockedOnSelect} />);

  userEvent.click(screen.getByRole("img"));
  expect(mockedOnSelect).toHaveBeenCalledTimes(1);
  expect(mockedOnSelect.mock.calls[0][0].id).toBe(420);
});
