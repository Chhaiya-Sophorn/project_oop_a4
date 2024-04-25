"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoPilot = void 0;
const Employee_1 = require("../Employee");
class CoPilot extends Employee_1.Employee {
    constructor(firstName, lastName, nationality, age, salary, typeOfJob) {
        super(firstName, lastName, nationality, age, salary, typeOfJob);
    }
}
exports.CoPilot = CoPilot;
