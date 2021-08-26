describe("Home page users", () => {
  it("can see the title", () => {
    const user = cy;
    user.visit("/").get("h1").findByText("Frontend template").should("exist");
  });
});
