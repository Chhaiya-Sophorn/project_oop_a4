"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passenger_1 = require("./person/passenger/passenger");
let passenger = new passenger_1.Passenger('chhaiya', 'ddd', 'khmer', 55);
let result = [passenger.firstName, passenger.lastName, passenger.nationality, passenger.age];
console.log(result);
console.log(passenger);
