import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");

  const calculate = async () => {
    const num1 = Number(input1);
    const num2 = Number(input2);

    let endpoint = "";
    if (operator === "+") endpoint = "http://localhost:5000/api/add";
    if (operator === "-") endpoint = "http://localhost:5000/api/subtract";
    if (operator === "*") endpoint = "http://localhost:5000/api/multiply";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input1: num1, input2: num2 }),
      });

      const data = await res.json();

      // API returns different keys
      if (data.sum !== undefined) setResult(data.sum);
      else if (data.difference !== undefined) setResult(data.difference);
      else if (data.product !== undefined) setResult(data.product);
      else setResult("Error");
    } catch (err) {
      console.error(err);
      setResult("Error");
    }
  };

  return (
    <div className="calc-container">
      <div className="calc-row">
        <label htmlFor="input1">Input1</label>
        <input
          id="input1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </div>

      <div className="calc-row">
        <label htmlFor="input2">Input2</label>
        <input
          id="input2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          onBlur={calculate}
        />
      </div>

      <div className="calc-row">
        <label htmlFor="operator">Operator</label>
        <select
          id="operator"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
        </select>
      </div>

      <button onClick={calculate}>Calculate</button>

      <div className="calc-row">
        <label htmlFor="result">Result</label>
        <input id="result" readOnly value={result} />
      </div>
    </div>
  );
};

export default Calculator;
