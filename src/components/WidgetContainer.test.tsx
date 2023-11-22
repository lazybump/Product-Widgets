import { render, screen } from "@testing-library/react";
import WidgetContainer from "./WidgetContainer";
import dummyResponse from "../mocks/dummyResponse.json";

test("renders product widgets on page load", async () => {
  // All widgets
  render(<WidgetContainer />);
  const widgets = await screen.findAllByRole("listitem");
  expect(widgets).toHaveLength(dummyResponse.length);
  // Individual widget
  const carbonWidget = screen.getByText("carbon");
  expect(carbonWidget).toBeInTheDocument();
});
