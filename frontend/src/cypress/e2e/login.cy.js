describe("Login E2E Tests", () => {
  it("Login was successful and redirected to calculator page", () => {
    // Intercept backend API request
    cy.intercept("POST", "http://localhost:5000/api/login", {
      statusCode: 200,
      body: { message: "Login successful", token: "abc123" },
    }).as("loginRequest");

    // Visit login page
    cy.visit("http://localhost:5173/login");

    // Fill login inputs
    cy.get('input[name="username"]').type("test@gmail.com");
    cy.get('input[name="password"]').type("password123");

    // Submit
    cy.get('button[type="submit"]').click();

    // Wait for mocked API call
    cy.wait("@loginRequest");

    // Assert redirect
    cy.url().should("include", "/calculator");
  });
});
