import { Person } from "../Person";
export class Passenger extends Person{
    firstName: string;
    lastName: string;
    nationality: string;
    age: number;
    constructor(firstName:string, lastName:string,nationality:string,age:number){
        super(firstName,lastName,nationality,age);
    }
    
}