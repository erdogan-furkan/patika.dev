import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import App from "./App";

jest.useFakeTimers();

describe("Emoji results tests", () => {
  let emojiList, emojiItem, searchInput;

  beforeEach(() => {
    render(<App />);
    emojiList = screen.getAllByTestId("emoji-result-row");
    emojiItem = screen.getByText("Grinning");
    searchInput = screen.getByTestId("search-input");
  });

  test("emoji list should be rendered when the app is opened", () => {
    expect(emojiList.length).toEqual(20);
  });

  test("emoji list should be re-rendered when any filter is applied.", () => {
    userEvent.type(searchInput, "100");
    emojiList = screen.getAllByTestId("emoji-result-row");
    expect(emojiList.length).toEqual(1);
  });
});
