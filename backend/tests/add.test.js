const request = require("supertest");
const app = require("../app"); // Assuming your Express app is exported from app.js

describe("POST/add", () => {
  it("return Correct Sum of two numbers", async () => {
    const res = await request(app)
      .post("/api/add")
      .send({ input1: 5, input2: 10 });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("sum", 15);
  });
  it("handle invalid inputs", async () => {
    const res = await request(app)
      .post("/api/add")
      .send({ input1: "five", input2: 10 });

    expect(res.statusCode).toEqual(400);
  });
});
