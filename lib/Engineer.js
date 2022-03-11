const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, "engineer");
    this.github = github;
    this.title = "engineer";
    console.log(Employee);
  }
  validateEngineer() {
    if (typeof this.github !== "string" || !this.github.trim().length) {
      throw new Error("Expected parameter 'github' to be a non-empty string");
    }
    this.validateEmployee();
  }
  getGithub() {

    return this.github;
  }
  getTitle() {
    return this.title;
  }
  printInfo() {
    console.log(
      `${this.name} is the bomb diggity. ID: ${this.id}, email: ${this.email}, github: ${github}, title: ${this.title}`
    );
  }
}
// const github = "amachkel";
// const alex = new Engineer(
//   "Alex",
//   "14",
//   "amachkel@gmail.com",
//   "Engineer",
//   github
// );
// alex.printInfo();
// console.log(Engineer1);
module.exports = Engineer;
