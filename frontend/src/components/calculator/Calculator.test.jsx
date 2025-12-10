import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Calculator from "./Calculator";

global.fetch = vi.fn((url, options) => {
  const body = JSON.parse(options.body);

  if (url.endsWith("/add")) {
    return Promise.resolve({
      json: () => Promise.resolve({ sum: body.input1 + body.input2 }),
    });
  }

  return Promise.resolve({
    json: () => Promise.resolve({}),
  });
});

describe("Calculator Component", () => {
  it("calculates addition on blur", async () => {
    render(<Calculator />);

    const input1 = screen.getByLabelText("Input1");
    const input2 = screen.getByLabelText("Input2");
    const operator = screen.getByLabelText("Operator");
    const result = screen.getByLabelText("Result");

    fireEvent.change(input1, { target: { value: "8" } });
    fireEvent.change(input2, { target: { value: "2" } });
    fireEvent.change(operator, { target: { value: "+" } });

    fireEvent.blur(input2);

    await waitFor(() => {
      expect(result.value).toBe("10");
    });
  });
});
