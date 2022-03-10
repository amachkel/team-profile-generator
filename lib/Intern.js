const Employee = require('./Employee'); 

class Intern extends Employee {
    constructor(name, id, email, school) {

    }
    getSchool() {

    }
    getRole() {
        return 'Intern';
    }
} 