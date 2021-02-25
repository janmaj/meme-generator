import TemplatePicker from "./TemplatePicker";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import * as api from "../../api";

jest.mock("../../api");
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));
const mockedApi = api as jest.Mocked<typeof api>;
const mockedFetchAll = mockedApi.fetchAll;

it("renders a message when api returns an empty array", async () => {
  mockedFetchAll.mockResolvedValueOnce([]);
  render(<TemplatePicker onPick={(t) => {}} />);
  expect(await screen.findByText(/No/)).toBeInTheDocument();
});

it("Renders the correct number of tiles", async () => {
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
  mockedFetchAll.mockResolvedValueOnce(templates);
  render(<TemplatePicker onPick={(t) => {}} />);
  expect(await screen.findAllByTestId("template-card")).toHaveLength(3);
});

it("Renders the correct image", async () => {
  const templates = [
    {
      id: 420,
      url: "test-url",
      boxCount: 2,
      name: "test-name",
    },
  ];
  mockedFetchAll.mockResolvedValueOnce(templates);
  render(<TemplatePicker onPick={(t) => {}} />);
  expect(await screen.findByAltText("test-name")).toBeInTheDocument();
});

it("calls onPick when a template is picked", async () => {
  const templates = [
    {
      id: 420,
      url: "test-url",
      boxCount: 2,
      name: "test-name",
    },
  ];
  mockedFetchAll.mockResolvedValueOnce(templates);
  const mockedOnPick = jest.fn((t) => {});
  render(<TemplatePicker onPick={mockedOnPick} />);
  userEvent.click(await screen.findByAltText("test-name"));
  userEvent.click(screen.getByText(/go/));
  expect(mockedOnPick).toHaveBeenCalledTimes(1);
});

it("renders a spinner when mounted", async () => {
  mockedFetchAll.mockResolvedValueOnce([]);
  render(<TemplatePicker onPick={(t) => {}} />);
  expect(screen.getByTestId("spinner")).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
});
