"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passenger = void 0;
const person_1 = require("../person");
class Passenger extends person_1.Person {
    constructor(firstName, lastName, creditCard, passport, gender) {
        super(firstName, lastName, gender);
        this.creditCard = creditCard;
        this.passport = passport;
        this.creditCard = creditCard;
        this.passport = passport;
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
    getCreditCard() {
        return this.creditCard;
    }
    getPassport() {
        return this.passport;
    }
}
exports.Passenger = Passenger;
