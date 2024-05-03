"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirportController = void 0;
const employee_1 = require("../employee");
class AirportController extends employee_1.Employee {
    constructor(firstName, lastName, gender, salary) {
        super(firstName, lastName, gender, salary);
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getGender() {
        return this.gender;
    }
    getSalary() {
        return this.salary;
    }
}
exports.AirportController = AirportController;
