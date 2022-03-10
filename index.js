const inquirer = require("inquirer");
const fs = require("fs");

const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

const questions = [
  {
    type: "checkbox",
    name: "title",
    message: "What's the employee's job title?",
    choices: ["Manager", "Engineer", "Intern"],
  },
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

function init() {
  inquirer.prompt(questions).then((data) => {
    getEmployee(data);
    console.log(data.title);
    data.title == "Manager"
      ? getOfficeNum(data)
      : data.title == "Engineer"
      ? getGitHub(data)
      : data.title == "Intern"
      ? getSchool(data)
      : console.error("error");
  });
  //based on job title, start new inquirer function
}
getOfficeNum = (data) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "Manager's office number: ",
      },
    ])
    .then((response) => {
      data.officeNumber = response.officeNumber;
      console.log(data);
    });
};
getGitHub = (data) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "GitHub username: ",
      },
    ])
    .then((response) => {
      data.github = response.github;
      console.log(data);
    });
};
getSchool = (data) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "School name: ",
      },
    ])
    .then((response) => {
      data.school = response.school;
      console.log(data);
    });
};
const getEmployee = (data) => {
  const employee1 = new Employee(data.name, data.id, data.email, data.title);
  console.log(
    `A new employee has been added: ${employee1.name}, ${employee1.id}, ${employee1.email}, ${employee1.title}`
  );
};
init();
