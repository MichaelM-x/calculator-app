import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator Component", () => {
  it("Calculate results based on operator", () => {
    render(<Calculator />);

    const input1 = screen.getByLabelText("Input1");
    const input2 = screen.getByLabelText("Input2");
    const operator = screen.getByLabelText("Operator");
    const result = screen.getByLabelText("Result");
    //   Enter Numbers
    fireEvent.change(input1, { target: { value: "8" } });
    fireEvent.change(input2, { target: { value: "2" } });

    //Choose Addition
    fireEvent.change(operator, { target: { value: "+" } });

    fireEvent.blur(input2);
    expect(result.value).toBe("10");
  });
});
