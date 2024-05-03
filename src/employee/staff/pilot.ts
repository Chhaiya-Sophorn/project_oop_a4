import { Gender } from "../../gender";
import { Employee } from "../employee";

export class Pilot extends Employee{
    constructor(firstName: string, lastName: string,gender: Gender,salary: number){
        super(firstName, lastName,gender,salary)
    }
    getFirstName(): string {
        return this.firstName
    }
    getLastName(): string {
        return this.lastName
    }
    getGender(): Gender {
        return this.gender
    }
    getSalary(): number {
        return this.salary
    }
}