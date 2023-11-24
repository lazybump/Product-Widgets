import { render, screen } from "@testing-library/react";
import WidgetContainer from "./WidgetContainer";

test("activating a badge deactivates other badges", () => {
  render(<WidgetContainer />);
});
