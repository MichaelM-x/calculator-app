const request = require("supertest");
const app = require("../app"); // Assuming your Express app is exported from app.js

describe("POST/subtract", () => {
  it("returns Correct Difference of two numbers", async () => {
    const res = await request(app)
      .post("/api/subtract")
      .send({ input1: 15, input2: 5 });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("difference", 10);
  });
  it("handles invalid inputs", async () => {
    const res = await request(app)
      .post("/api/subtract")
      .send({ input1: "fifteen", input2: 5 });

    expect(res.statusCode).toEqual(400);
  });
});
