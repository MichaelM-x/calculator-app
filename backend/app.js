const express = require("express");

const app = express();

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

module.exports = app;
