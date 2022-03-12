const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const generateTeam = require("./cards");
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
    type: "number",
    name: "id",
    message: "Enter employee's ID",
  },
  {
    type: "input",
    name: "email",
    message: "Enter employee's email address.",
  },
];
let employeeArr = [];
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data.title);
    getEmployee(data);
  });
  //based on job title, start new inquirer function
}
getOfficeNum = (data) => {
  inquirer
    .prompt([
      {
        type: "number",
        name: "officeNumber",
        message: "Manager's office number: ",
      },
    ])
    .then((response) => {
      const employee = new Manager(
        data.name,
        data.id,
        data.email,
        response.officeNumber
      );
      employee.validateManager();
      console.log(
        `A new employee has been added: Title: ${employee.title}, name: ${employee.name}, id: ${employee.id}, email: ${employee.email}, office number: ${employee.officeNumber}`
      );
      employeeArr.push(employee);
      console.log(data);
      addAnother();
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
      const employee = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      employee.validateEngineer();
      employeeArr.push(employee);
      addAnother();
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
      const employee = new Intern(data.name, data.id, data.email, data.school);
      employee.validateIntern();
      console.log(
        `A new employee has been added: Title: ${data.title}, name: ${data.name}, id: ${data.id}, email: ${data.email}, school: ${data.school}`
      );
      employeeArr.push(employee);
      addAnother();
    });
};
const getEmployee = (data) => {
  data.title == "Manager"
    ? getOfficeNum(data)
    : data.title == "Engineer"
    ? getGitHub(data)
    : data.title == "Intern"
    ? getSchool(data)
    : console.error("error");
};
const addAnother = () => {
  inquirer
    .prompt([
      {
        type: "checkbox",
        name: "addAnother",
        message: "What do you want to do now?",
        choices: ["Add another employee", "I am done"],
      },
    ])
    .then((data) => {
      if (data.addAnother != "I am done") {
        init();
      } else {
        fs.readFile("cards.js", "utf8", function (err, data) {
          if (err) {
            console.log(err);
          }
          var result = data.replace(
            "{employeeData}",
            JSON.stringify(employeeArr)
          );

          fs.writeFile("cards-prod.js", result, "utf8", function (err) {
            if (err) console.log(err);
          });
        });
      }
    });
};
init();
