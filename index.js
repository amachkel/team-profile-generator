const inquirer = require("inquirer");
const fs = require("fs");

const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

const questions = [
  {
    type: "input",
    name: "name",
    message: "Enter employee's name.",
  },
  {
    type: "input",
    name: "id",
    message: "Enter employee's ID",
  },
  {
    type: "input",
    name: "email",
    message: "Enter employee's email address.",
  },
];

const managerQ = {
  type: "input",
  name: "officeNumber",
  message: "Manager's office number: ",
};

const engineerQ = {
  type: "input",
  name: "github",
  message: "GitHub username: ",
};

const internQ = {
  type: "input",
  name: "school",
  message: "School name: ",
};