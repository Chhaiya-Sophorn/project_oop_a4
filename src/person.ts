import { Gender } from "./gender";

export abstract class Person {

    constructor(protected firstName: string,protected lastName: string,protected gender:Gender){}
    getFirstName():string{
        return this.firstName;
    }
    getLastName():string{
       return this.lastName;
    }
    getGender():Gender{
        return this.gender;
    }
}