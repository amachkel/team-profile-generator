const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const questions = [
  {
    type: "checkbox",
    name: "title",
    message: "What's the employee's job title?",
    choices: ["Engineer", "Intern"],
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
// empty array to push employee objects into
let employeeArr = [];

//to initialize app
function init() {
  getManager();
  //based on job title, start new inquirer function
}

// for manager
getManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter manager's name.",
      },
      {
        type: "number",
        name: "id",
        message: "Enter manager's ID",
      },
      {
        type: "input",
        name: "email",
        message: "Enter manager's email address.",
      },
      {
        type: "number",
        name: "officeNumber",
        message: "Manager's office number: ",
      },
    ])
    .then((data) => {
      const employee = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
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

// for engineer
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

//for intern
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
const getEmployee = () => {
  inquirer.prompt(questions).then((data) => {
    data.title == "Engineer"
      ? getGitHub(data)
      : data.title == "Intern"
      ? getSchool(data)
      : console.error("error");
  });
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
        getEmployee();
      } else {
        // read card template
        fs.readFile("src/cards.js", "utf8", function (err, data) {
          if (err) {
            console.log(err);
          }
          const result = data.replace(
            "{employeeData}",
            JSON.stringify(employeeArr)
          );
          // create from template to include employee data
          fs.writeFile("dist/cards-prod.js", result, "utf8", function (err) {
            if (err) console.log(err);
          });
        });
      }
    });
}

init();
