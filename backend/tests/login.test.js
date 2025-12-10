const request = require("supertest");
const app = require("../app");

describe("Login API", () => {
  it("should return success for valid credentials", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({ username: "test@gmail.com", password: "password123" });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Login successful");
  });

  it("should return error for invalid credentials", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({ username: "user", password: "wrongpassword" });
    expect(response.statusCode).toBe(401);
    expect(response.body.error).toBe("Invalid credentials");
  });
});
