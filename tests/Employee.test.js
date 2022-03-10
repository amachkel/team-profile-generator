const Employee = require("../lib/Employee");

describe("Employee", () => {
  //positive test
  it("should create an object with 'name' string, 'ID' number, 'email' string, and 'title' string", () => {
    const employee = new Employee("Fred", 12, "fred@gmail.com");
    expect(employee.name).toEqual("Fred");
    expect(employee.id).toEqual(12);
    expect(employee.email).toEqual("fred@gmail.com");
    expect(employee.title).toEqual("Employee");
  });
  //negative test
  it("should throw an error if provided no arguments", () => {
    // Wrap the object initialization in a callback function that Jest will run
    const cb = () => new Employee();

    // Verify that an error was thrown in the callback function
    expect(cb).toThrow();
  });
  it("should throw an error if name is not a string", () => {
    const cb = () => new Employee(3, 12, "fred@gmail.com", "Employee");

    // Define the error message that is expected to be thrown
    const err = new Error("Expected name to be a non-empty string");

    // Verify that the correct error was thrown when the callback is executed
    expect(cb).toThrowError(err);
  });
});
