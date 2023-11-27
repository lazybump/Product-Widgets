import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { dummyResponse } from "../mocks/dummyResponse";
import Widget from "./Widget";

describe("Widget component", () => {
  test("profile link checkbox is checked when clicked", async () => {
    const widgetObj = dummyResponse[0];
    const activeWidgetId = 1;
    const setActiveWidgetId = vi.fn();
    render(
      <Widget
        {...widgetObj}
        activeWidgetId={activeWidgetId}
        setActiveWidgetId={setActiveWidgetId}
      />
    );
    userEvent.setup();

    const linkProfileCheckbox = screen.getByLabelText("", {
      selector: '[id^="link-"]',
    });

    await userEvent.click(linkProfileCheckbox);
    expect(linkProfileCheckbox).toBeChecked();
  });

  test("widget activates when toggle is clicked", async () => {
    const widgetObj = dummyResponse[0];
    render(
      <Widget {...widgetObj} activeWidgetId={1} setActiveWidgetId={vi.fn()} />
    );

    const toggleInput = screen.getByLabelText("", {
      selector: "input.toggle-input",
    });
    await userEvent.click(toggleInput);
    expect(toggleInput).toBeChecked();
  });
});

