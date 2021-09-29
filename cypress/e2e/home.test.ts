describe("Home page users", () => {
  it("can see the title", () => {
    const user = cy;
    user.visit("/");

    user.findByText("Frontend template");

    cy.should("exist");
  });
});
