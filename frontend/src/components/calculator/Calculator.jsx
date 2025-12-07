import React from "react";
import "./Calculator.css"; // ← Add this

export default function Calculator() {
  const input1Ref = React.createRef();
  const input2Ref = React.createRef();
  const operatorRef = React.createRef();
  const resultRef = React.createRef();

  const calculate = () => {
    const a = Number(input1Ref.current.value);
    const b = Number(input2Ref.current.value);
    const op = operatorRef.current.value;

    if (isNaN(a) || isNaN(b)) {
      resultRef.current.value = "Invalid";
      return;
    }

    let output;
    if (op === "+") output = a + b;
    else if (op === "-") output = a - b;
    else if (op === "*") output = a * b;

    resultRef.current.value = String(output);
  };

  return (
    <div className="calc-container">
      <div className="calc-row">
        <label htmlFor="input1">Input1</label>
        <input id="input1" ref={input1Ref} onBlur={calculate} />
      </div>

      <div className="calc-row">
        <label htmlFor="input2">Input2</label>
        <input id="input2" ref={input2Ref} onBlur={calculate} />
      </div>

      <div className="calc-row">
        <label htmlFor="operator">Operator</label>
        <select id="operator" ref={operatorRef} onChange={calculate}>
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
        </select>
      </div>

      <div className="calc-row">
        <label htmlFor="result">Result</label>
        <input id="result" ref={resultRef} readOnly />
      </div>
    </div>
  );
}
