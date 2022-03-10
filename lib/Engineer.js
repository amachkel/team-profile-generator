const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, "engineer");
    this.github = github;
    this.title = "engineer";
  }
  getGithub() {
    return this.github;
  }
  getTitle() {
    return "Engineer";
  }
  printInfo() {
    console.log(
      `${this.name} is the bomb diggity. ID: ${this.id}, email: ${this.email}, github: ${github}, title: ${this.title}`
    );
  }
}
const github = "amachkel";
const alex = new Engineer("Alex", "14", "amachkel@gmail.com", github);
alex.printInfo();