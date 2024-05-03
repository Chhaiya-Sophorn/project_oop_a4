import { Date } from "../book/date";
import { Ticket } from "../book/ticket/ticket";
import { Pilot } from "../employee/staff/pilot";
import { Chef } from "../employee/staff/chef";
import { FlightAttendant } from "../employee/staff/flight-attendant";
import { AirportController } from "../employee/staff/airport-controller";
import { Route } from "../rout/route";
import { Airline } from "../airline/airline";
import { Airplane } from "../airplane/airplane";

export class Flight {
  private flightNumber: number;
  private date: Date;
//   private ticket: Ticket;
  private pilot: Pilot[] = [];
  private chef: Chef[] = [];
  private flightAttendant: FlightAttendant[] = [];
  private airportController: AirportController[] = [];
  private route: Route;
  private airline: Airline;
  private airplane: Airplane;

  constructor(
    flightNumber: number,
    date: Date,
    // ticket: Ticket,
    pilot: Pilot[],
    chef: Chef[],
    flightAttendant: FlightAttendant[],
    airportController: AirportController[],
    route: Route,
    airline: Airline,
    airplane: Airplane
  ) {
    this.flightNumber = flightNumber;
    this.date = date;
    // this.ticket = ticket;
    this.pilot = pilot;
    this.chef = chef;
    this.flightAttendant=flightAttendant,
    this.airportController=airportController,
    this.route = route;
    this.airline = airline;
    this.airplane = airplane;
  }

  addPilot(pilot: Pilot): void {
    this.pilot.push(pilot);
  }

  addChef(chef: Chef): void {
    this.chef.push(chef);
  }

  addFlightAttendant(flightAttendant: FlightAttendant): void {
    this.flightAttendant.push(flightAttendant);
  }

  addAirportController(airportController: AirportController): void {
    this.airportController.push(airportController);
  }

  getFlightNumber(): number {
    return this.flightNumber;
  }

  getDate(): Date {
    return this.date;
  }

//   getTicket(): Ticket {
//     return this.ticket;
//   }

  getRoute(): Route {
    return this.route;
  }

  getAirline(): Airline {
    return this.airline;
  }

  getAirplane(): Airplane {
    return this.airplane;
  }
}