import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Editor from "./Editor";

const mockedHistoryReplace = jest.fn();
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    replace: mockedHistoryReplace,
  }),
}));

it("triggers a redirect when the activeTemplate prop is null", () => {
  render(<Editor activeTemplate={null} />);
  expect(mockedHistoryReplace).toHaveBeenCalled();
});
