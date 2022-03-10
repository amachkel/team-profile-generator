const Manager = require("../lib/Manager");

describe("Manager", () => {
  test("should create an object with 'github' string", () => {
    const manager = new Manager("Sissy", 23, "sissy@mail.com", 112);

    expect(manager.officeNumber).toEqual(112);
  });
  test("should throw an error if officeNumber is not a number", () => {
    // Act
    const err = new Error(
      "Expected parameter 'officeNumber' to be a non-negative number"
    );
    // Assert
    expect(() => {
      new Manager("Sissy", 23, "sissy@mail.com", "112").getOfficeNumber();
    }).toThrow(err);
  });
  test("should throw an error if officeNumber is less than zero", () => {
    // Act
    const err = new Error(
      "Expected parameter 'officeNumber' to be a non-negative number"
    );
    // Assert
    expect(() => {
      new Manager("Sissy", 23, "sissy@mail.com", -4).getOfficeNumber();
    }).toThrow(err);
  });
  test("should override title to equal 'manager'", () => {
    const manager = new Manager("manager");

    expect(manager.title).toEqual("manager");
  });
}); 