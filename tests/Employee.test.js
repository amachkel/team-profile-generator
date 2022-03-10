const Employee = require("../lib/Employee");

describe("Employee", () => {
  //positive test
  test("should create an object with 'name' string, 'ID' number, 'email' string, and 'title' string", () => {
    const employee = new Employee("Fred", 12, "fred@gmail.com", "Employee");
    expect(employee.name).toEqual("Fred");
    expect(employee.id).toEqual(12);
    expect(employee.email).toEqual("fred@gmail.com");
    expect(employee.title).toEqual("Employee");
  });

  test("should throw an error if name is not a string", () => {
    const err = new Error("Expected parameter 'name' to be a non-empty string");
    expect(() => {
      new Employee(3, 12, "fred@gmail.com", "Employee").getName();
    }).toThrow(err);
  });
});
