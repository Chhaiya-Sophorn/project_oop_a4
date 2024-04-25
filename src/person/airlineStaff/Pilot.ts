import { Employee } from "../Employee";
export class Pliot extends Employee {
    constructor(firstName: string,
         lastName: string,
          nationality: string, age: number, salary: number, typeOfJob: string) {
        super(firstName, lastName, nationality, age, salary, typeOfJob);
    }
}