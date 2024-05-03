"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flight = void 0;
class Flight {
    constructor(flightNumber, date, 
    // ticket: Ticket,
    pilot, chef, flightAttendant, airportController, route, airline, airplane) {
        //   private ticket: Ticket;
        this.pilot = [];
        this.chef = [];
        this.flightAttendant = [];
        this.airportController = [];
        this.flightNumber = flightNumber;
        this.date = date;
        // this.ticket = ticket;
        this.pilot = pilot;
        this.chef = chef;
        this.flightAttendant = flightAttendant,
            this.airportController = airportController,
            this.route = route;
        this.airline = airline;
        this.airplane = airplane;
    }
    addPilot(pilot) {
        this.pilot.push(pilot);
    }
    addChef(chef) {
        this.chef.push(chef);
    }
    addFlightAttendant(flightAttendant) {
        this.flightAttendant.push(flightAttendant);
    }
    addAirportController(airportController) {
        this.airportController.push(airportController);
    }
    getFlightNumber() {
        return this.flightNumber;
    }
    getDate() {
        return this.date;
    }
    //   getTicket(): Ticket {
    //     return this.ticket;
    //   }
    getRoute() {
        return this.route;
    }
    getAirline() {
        return this.airline;
    }
    getAirplane() {
        return this.airplane;
    }
}
exports.Flight = Flight;
