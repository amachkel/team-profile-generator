class Employee {
  constructor(name, id, email, title) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = "employee";
  }
  getName() {
    if (typeof this.name !== "string" || !this.name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
  }
  getID() {
    if (typeof this.id !== "number" || isNaN(this.id) || this.id < 0) {
      throw new Error("Expected parameter 'ID' to be a non-negative number");
    }
  }
  getEmail() {
    if (typeof this.email !== "string" || !this.email.trim().length) {
      throw new Error("Expected parameter 'email' to be a non-empty string");
    }
  }
  getTitle(data) {
    return data.title = "Employee";
  }
  printInfo() {
    console.log(
      `A new employee has been added: ${this.name}, ${this.id}, ${this.email}, ${this.title}`
    );
  }
}
const bob = new Employee("Bob", "12", "bob@email", this.title);
bob.printInfo();

module.exports = Employee;
