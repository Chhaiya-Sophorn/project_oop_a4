import { Person } from "./Person";

export class Employee extends Person {
    salary: number;
    typeOfJob: string;
    constructor(firstName: string, lastName: string,nationality:string,age:number,salary:number,typeOfJob:string){
        super(firstName, lastName,nationality,age);
    }
    public getSalary(): number {
        return this.salary;
    };
   
}