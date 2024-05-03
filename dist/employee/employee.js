"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const person_1 = require("../person");
class Employee extends person_1.Person {
    constructor(firstName, lastName, gender, salary) {
        super(firstName, lastName, gender);
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
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
exports.Employee = Employee;
