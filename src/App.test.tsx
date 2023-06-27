import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("test something", () => {
  it("basic test", async () => {
    render(<App />);
    sessionStorage.setItem("test", "1");
    const counter = await screen.findByTestId("counter");
    await userEvent.click(counter);
    expect(counter).toHaveTextContent("count is 1");
    expect(sessionStorage.getItem("test")).toBe("1");
  });

  it("basic test xx", async () => {
    render(<App />);
    sessionStorage.setItem("test", "2");
    const counter = await screen.findByTestId("counter");
    await userEvent.click(counter);
    expect(counter).toHaveTextContent("count is 1");
    expect(sessionStorage.getItem("test")).toBe("2");
  });

  for (let i = 0; i < 20; i++) {
    it(`basic test ${i}`, async () => {
      render(<App />);
      sessionStorage.setItem("test", String(i));
      const counter = await screen.findByTestId("counter");
      for (let j = 0; j < i; j++) {
        await userEvent.click(counter);
        expect(counter).toHaveTextContent(`count is ${j + 1}`);
      }
      expect(sessionStorage.getItem("test")).toBe(String(i));
    });
  }
});
