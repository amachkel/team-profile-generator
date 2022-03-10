const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, "intern");
    this.school = school;
    this.title = "intern";
  }
  getSchool() {
    if (typeof this.school !== "string" || !this.school.trim().length) {
      throw new Error("Expected parameter 'school' to be a non-empty string");
    }
  }
  getTitle() {
    return "Intern";
  }
}
module.exports = Intern;