import { Gender } from "../gender";
import { Person } from "../person";
export abstract class Employee extends Person {
    constructor(protected firstName: string, protected lastName: string,gender: Gender,protected salary: number,) {
        super(firstName,lastName,gender);
    }
    getFirstName(): string {
        return this.firstName;
    }
    getLastName(): string {
        return this.lastName;
    }
    getGender(): Gender {
        return this.gender;
    }
    getSalary(): number {
        return this.salary;
    }
}