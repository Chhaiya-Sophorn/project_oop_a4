"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passenger = void 0;
const Person_1 = require("../Person");
class Passenger extends Person_1.Person {
    constructor(firstName, lastName, nationality, age) {
        super(firstName, lastName, nationality, age);
    }
}
exports.Passenger = Passenger;
