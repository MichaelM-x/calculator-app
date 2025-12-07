const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); // <-- FIX
app.use(express.json());

// Addition endpoint
app.post("/api/add", (req, res) => {
  const { input1, input2 } = req.body;
  if (typeof input1 !== "number" || typeof input2 !== "number") {
    return res.status(400).json({ error: "Invalid inputs" });
  }
  const sum = input1 + input2;
  res.json({ sum });
});

// Subtraction endpoint
app.post("/api/subtract", (req, res) => {
  const { input1, input2 } = req.body;
  if (typeof input1 !== "number" || typeof input2 !== "number") {
    return res.status(400).json({ error: "Invalid inputs" });
  }
  const difference = input1 - input2;
  res.json({ difference });
});

// Multiplication endpoint
app.post("/api/multiply", (req, res) => {
  const { input1, input2 } = req.body;
  if (typeof input1 !== "number" || typeof input2 !== "number") {
    return res.status(400).json({ error: "Invalid inputs" });
  }
  const product = input1 * input2;
  res.json({ product });
});

module.exports = app;
