import { useState } from "react";

export default function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState("+");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const calculate = async () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    // Validation
    if (isNaN(numA) || isNaN(numB)) {
      setResult("Invalid input");
      return;
    }

    // Choose endpoint
    let endpoint = "";
    switch (op) {
      case "+":
        endpoint = "/api/add";
        break;
      case "-":
        endpoint = "/api/subtract";
        break;
      case "*":
        endpoint = "/api/multiply";
        break;
      default:
        return;
    }

    try {
      setLoading(true);

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ a: numA, b: numB }),
      });

      const data = await res.json();

      if (!res.ok) {
        setResult("Error");
      } else {
        setResult(data.result);
      }
    } catch (error) {
      setResult("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      <h2>Calculator</h2>

      <input
        aria-label="input-a"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="Enter first number"
        style={{ display: "block", width: "100%", marginBottom: "10px" }}
      />

      <input
        aria-label="input-b"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Enter second number"
        style={{ display: "block", width: "100%", marginBottom: "10px" }}
      />

      <select
        aria-label="operator"
        value={op}
        onChange={(e) => setOp(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      >
        <option value="+">Add (+)</option>
        <option value="-">Subtract (-)</option>
        <option value="*">Multiply (*)</option>
      </select>

      <button
        aria-label="calculate-btn"
        onClick={calculate}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "15px",
          cursor: "pointer",
        }}
        disabled={loading}
      >
        {loading ? "Calculating..." : "Calculate"}
      </button>

      <div
        aria-label="result"
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          minHeight: "30px",
          textAlign: "center",
        }}
      >
        {result}
      </div>
    </div>
  );
}
