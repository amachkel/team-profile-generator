const Employee = require("../lib/Employee");
// What data am I trying to get from the back end to create html for the browser?
// pseudo code it out.
describe("Employee", () => {
  //positive test
  test("should create an object with 'name' string, 'ID' number, 'email' string, and 'title' string", () => {
    // Act
    const employee = new Employee("Fred", 12, "fred@gmail.com", "Employee");
    // Assert
    expect(employee.name).toEqual("Fred");
    expect(employee.id).toEqual(12);
    expect(employee.email).toEqual("fred@gmail.com");
    expect(employee.title).toEqual("Employee");
  });

  test("should throw an error if name is not a string", () => {
    const err = new Error("Expected parameter 'name' to be a non-empty string");
    // Assert
    expect(() => {
      new Employee(3, 12, "fred@gmail.com", "Employee").getName();
    }).toThrow(err);
  });

  //exception test
  test("should throw an error if ID is not a number", () => {
    const err = new Error(
      "Expected parameter 'ID' to be a non-negative number"
    );
    expect(() => {
      new Employee("Fred", "12", "fred@gmail.com", "Employee").getID();
    }).toThrow(err);
  });
  //exception test
  test("should throw an error if ID is less than 0", () => {
    const err = new Error(
      "Expected parameter 'ID' to be a non-negative number"
    );
    expect(() => {
      new Employee("Fred", -12, "fred@gmail.com", "Employee").getID();
    }).toThrow(err);
  });
  //exception test
  test("should throw an error if email is not a string", () => {
    const err = new Error(
      "Expected parameter 'email' to be a non-empty string"
    );
    expect(() => {
      new Employee("Fred", 12, 14, "Employee").getEmail();
    }).toThrow(err);
  });
});
