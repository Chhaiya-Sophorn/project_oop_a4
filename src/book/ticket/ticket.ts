import { typeOfTicket } from "./type";
import { service } from "./service";

export class Ticket {
    private typeOfTicket: typeOfTicket;
    private service: service;

    constructor(typeOfTicket: typeOfTicket, service: service) {
        this.typeOfTicket = typeOfTicket;
        this.service = service;
    }

    getTypeOfTicket(): typeOfTicket {
        return this.typeOfTicket;
    }

    getService(): service {
        return this.service;
    }
}