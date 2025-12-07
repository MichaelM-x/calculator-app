import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator Component", () => {
  it("Calculate results based on operator", () => {
    render(<Calculator />);

    const input1 = screen.getByLabelText("input1");
    const input2 = screen.getByLabelText("input2");
    const operator = screen.getByLabelText("operator");
    const result = screen.getByLabelText("result");
  });
  //   Enter Numbers
  fireEvent.change(input1, { target: { value: "8" } });
  fireEvent.change(input2, { target: { value: "2" } });

  //Choose Addition
  fireEvent.change(operator, { target: { value: "add" } });

  fireEvent.blur(input2);
  expect(result.value).toBe("10");
});
