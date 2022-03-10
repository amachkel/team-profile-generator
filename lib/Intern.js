const Employee = require('./Employee'); 

class Intern extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, "intern");
        this.school = school;
        this.title = "intern";
      }
    getSchool() {

    }
    getTitle() {
        return 'Intern';
    }
} 