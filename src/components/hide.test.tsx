import { render, screen } from "@testing-library/react";
import { Hide } from "./hide";
import userEvent from "@testing-library/user-event";

describe("hide", () => {
  it("shows div on hover", () => {
    render(<Hide />);
    const container = screen.getByTestId("container");
    const second = screen.getByTestId("second");
    const first = screen.getByTestId("first");

    expect(container).toBeVisible();
    expect(second).not.toBeVisible();
    expect(first).toBeVisible();

    userEvent.hover(container);

    expect(second).toBeVisible();
  });
});
