"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
class Ticket {
    constructor(typeOfTicket, service) {
        this.typeOfTicket = typeOfTicket;
        this.service = service;
    }
    getTypeOfTicket() {
        return this.typeOfTicket;
    }
    getService() {
        return this.service;
    }
}
exports.Ticket = Ticket;
