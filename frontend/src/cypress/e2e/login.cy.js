describe("Login E2E Tests", () => {
  it("Login was successful and redirected to calculator page", () => {
    // Mock backend API
    cy.intercept("POST", "/api/login", {
      statusCode: 200,
      body: { message: "Login successful" },
    }).as("loginRequest");

    // Visit login page
    cy.visit("/login");

    // Fill in login form
    cy.get('input[name="username"]').type("test@gmail.com");
    cy.get('input[name="password"]').type("password123");

    // Submit login form
    cy.get('button[type="submit"]').click();
    // Wait for the login API call to complete
    cy.wait("@loginRequest");

    // Verify redirection to calculator page
    cy.url().should("include", "/calculator");
  });
});
