const Employee = require('./Employee'); 

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

    }

    getOfficeNumber() {
        
    }
    getRole() { 
        return 'Manager';
    }
} 