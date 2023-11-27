import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WidgetContainer from "./WidgetContainer";
import { dummyResponse } from "../mocks/dummyResponse";

describe("WidgetContainer component", () => {
  test("renders product widgets on page load", async () => {
    // All widgets
    render(<WidgetContainer />);
    const widgets = await screen.findAllByRole("listitem");
    expect(widgets).toHaveLength(dummyResponse.length);
    // Individual widget
    const carbonWidget = screen.getByText(/carbon/i);
    expect(carbonWidget).toBeInTheDocument();
  });

  test("toggling an inactive widget activates the widget", async () => {
    userEvent.setup();
    render(<WidgetContainer />);

    const toggle1 = await screen.findByLabelText("", {
      selector: '[id^="toggle-1"]',
    });

    expect(toggle1).not.toBeChecked();
    await userEvent.click(toggle1);
    expect(toggle1).toBeChecked();
  });

  test("toggling an active widget's toggle deactivates the widget", async () => {
    userEvent.setup();
    render(<WidgetContainer />);

    const toggle1 = await screen.findByLabelText("", {
      selector: '[id^="toggle-1"]',
    });

    expect(toggle1).not.toBeChecked();
    await userEvent.click(toggle1);
    await userEvent.click(toggle1);
    expect(toggle1).not.toBeChecked();
  });

  test("activating a widget deactivates all other widgets", async () => {
    userEvent.setup();
    render(<WidgetContainer />);

    const [toggle1, toggle2, toggle3] = await screen.findAllByLabelText("", {
      selector: '[id^="toggle-"]',
    });

    expect(toggle1).not.toBeChecked();
    expect(toggle2).not.toBeChecked();
    expect(toggle3).not.toBeChecked();

    await userEvent.click(toggle3);

    expect(toggle1).not.toBeChecked();
    expect(toggle2).not.toBeChecked();
    expect(toggle3).toBeChecked();
  });
});

