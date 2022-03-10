const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, "manager");
    this.officeNumber = officeNumber;
    this.title = "manager";
  }

  getOfficeNumber() {
    if (
      typeof this.officeNumber !== "number" ||
      isNaN(this.officeNumber) ||
      this.officeNumber < 0
    ) {
      throw new Error(
        "Expected parameter 'officeNumber' to be a non-negative number"
      );
    }
  }
  getTitle() {
    return "Manager";
  }
  printInfo() {}
}
module.exports = Manager;