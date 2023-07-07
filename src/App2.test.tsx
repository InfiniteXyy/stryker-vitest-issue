import { render, screen } from "@testing-library/react";
import App from "./App2";
import userEvent from "@testing-library/user-event";

describe("test something", () => {
  it("another test", async () => {
    render(<App />);
    expect(await screen.findByTestId("counter")).toBeVisible();
  });

  it("basic test", async () => {
    render(<App />);
    expect(sessionStorage.getItem("test")).toBe(null);
  });

  it("basic test2", async () => {
    render(<App />);
    const counter = await screen.findByTestId("counter");
    await userEvent.click(counter);
    expect(counter).toHaveTextContent("count is 1");
  });

  for (let i = 0; i < 4; i++) {
    it(`another test ${i}`, async () => {
      expect(sessionStorage.getItem("test")).toBe(null);
      expect(document.body.innerHTML).toBe("");
    });
  }
});
