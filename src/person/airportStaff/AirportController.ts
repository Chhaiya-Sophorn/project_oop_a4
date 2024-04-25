import { Employee } from "../Employee";

export class AirportController extends Employee {
    constructor(firstName: string, lastName: string, nationality: string, age: number, salary: number, typeOfJob: string) {
        super(firstName, lastName, nationality, age, salary, typeOfJob);
    }
}