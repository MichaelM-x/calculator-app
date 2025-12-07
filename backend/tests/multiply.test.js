const request = require("supertest");
const app = require("../app"); // Assuming your Express app is exported from app.js

describe("POST/multiply", () => {
  it("returns Correct Product of two numbers", async () => {
    const res = await request(app)
      .post("/api/multiply")
      .send({ input1: 4, input2: 5 });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("product", 20);
  });
  it("handles invalid inputs", async () => {
    const res = await request(app)
      .post("/api/multiply")
      .send({ input1: "four", input2: 5 });

    expect(res.statusCode).toEqual(400);
  });
});
