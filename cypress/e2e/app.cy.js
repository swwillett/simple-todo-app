describe("Todo App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // Update this if your app runs on a different URL
  });

  it("displays the header correctly", () => {
    cy.contains("Simple Todo App");
    cy.contains("Please add to-dos item(s) through the input field");
  });

  it("adds a new todo", () => {
    cy.get(".input-text").type("New Task");
    cy.get(".input-submit").click();
    cy.contains("New Task");
  });

  it("edits a todo item", () => {
    cy.get(".input-text").type("Editable Task");
    cy.get(".input-submit").click();

    cy.contains("Editable Task")
      .parent()
      .within(() => {
        cy.contains("Edit").click();
      });

    cy.get("input.input-edit")
      .should("be.visible")
      .clear()
      .type("Updated Task");

    cy.get("select").should("be.visible").select("In Progress");
    cy.contains("Save").click();
    cy.contains("Updated Task");
  });

  it("moves a task to done", () => {
    cy.get(".input-text").type("Task to Complete");
    cy.get(".input-submit").click();

    cy.contains("Task to Complete")
      .parent()
      .within(() => {
        cy.contains("Edit").click();
      });

    cy.get("select").select("Done");
    cy.contains("Save").click();
    cy.contains("Task to Complete")
      .should("have.css", "text-decoration")
      .then((textDecoration) => {
        expect(textDecoration).to.include("line-through");
      });
  });

  it("deletes a todo", () => {
    cy.get(".input-text").type("Task to Delete");
    cy.get(".input-submit").click();

    cy.contains("Task to Delete")
      .parent()
      .within(() => {
        cy.contains("Delete").click();
      });

    cy.contains("Task to Delete").should("not.exist");
  });
});
