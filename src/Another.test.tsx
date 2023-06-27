import { render, screen } from "@testing-library/react";
import App from "./App";

describe("test something", () => {
  it("another test", async () => {
    render(<App />);
    expect(await screen.findByTestId("counter")).toBeVisible();
  });
  it("basic test", async () => {
    render(<App />);
    expect(sessionStorage.getItem("test")).toBe(null);
  });

  for (let i = 0; i < 20; i++) {
    it(`another test ${i}`, async () => {
      expect(sessionStorage.getItem("test")).toBe(null);
      expect(document.body.innerHTML).toBe("");
    });
  }
});
