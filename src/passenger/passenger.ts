import { Gender } from "../gender";
import { Person } from "../person";

export class Passenger extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private creditCard: number,
        private passport: number,
        gender: Gender
    ) {
        super(firstName, lastName, gender);
        this.creditCard = creditCard;
        this.passport = passport;
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

    getCreditCard(): number {
        return this.creditCard;
    }

    getPassport(): number {
        return this.passport;
    }
}