import { Passenger } from "./passenger/passenger";
import { Booking } from "./book/booking";
import { Food } from "./book/food";
import { Gate } from "./book/gate";
import { Seat } from "./book/seat";

import { AirportController } from "./employee/staff/airport-controller";
import { Chef } from "./employee/staff/chef";
import { FlightAttendant } from "./employee/staff/flight-attendant";
import { Pilot } from "./employee/staff/pilot";

import { Gender } from "./gender";

import { Trip } from "./book/trip/trip";
import { service } from "./book/ticket/service";
import { Ticket } from "./book/ticket/ticket";
import { typeOfTicket } from "./book/ticket/type";
import { Date } from "./book/date";


import { Route } from "./rout/route";
import { Airline } from "./airline/airline";
import { Airport } from "./airport/airport";
import { Flight } from "./flight/flight";
import { Airplane } from "./airplane/airplane";



const passengers: Passenger[] = [
    new Passenger("Chhaiya", "Sophorn", 1234567890, 9876543210, Gender.Male),
    new Passenger("Thida", "Him", 2345678901, 8765432109, Gender.Female),
    new Passenger("Chhunei", "Ery", 3456789012, 7654321098, Gender.Male),
    new Passenger("Kaka", "Jack", 4567890123, 6543210987, Gender.Female),
    new Passenger("David", "Brown", 5678901234, 5432109876, Gender.Male),
];

const airportControllers: AirportController[] = [
    new AirportController("Sarah", "Taylor", Gender.Female, 5000),
    new AirportController("Robert", "Davis", Gender.Male, 5000),
    new AirportController("Jennifer", "Wilson", Gender.Female, 5000),
];

const chefs: Chef[] = [
    new Chef("Daniel", "Anderson", Gender.Male, 4000),
    new Chef("Sophia", "Miller", Gender.Female, 4000),
    new Chef("Andrew", "Moore", Gender.Male, 4000),
];

const flightAttendants: FlightAttendant[] = [
    new FlightAttendant("Olivia", "Taylor", Gender.Female, 3000),
    new FlightAttendant("Matthew", "Davis", Gender.Male, 3000),
    new FlightAttendant("Emma", "Wilson", Gender.Female, 3000),
];

const pilots: Pilot[] = [
    new Pilot("James", "Anderson", Gender.Male, 6000),
    new Pilot("Grace", "Miller", Gender.Female, 6000),
    new Pilot("Henry", "Moore", Gender.Male, 6000),
];

const gates: Gate[] = [
    new Gate(1),
    new Gate(2),
    new Gate(3),
]

const seats: Seat[] =[
    new Seat(1),
    new Seat(2),
    new Seat(3),
    new Seat(4),
    new Seat(5),
    new Seat(6),
    new Seat(7),
    new Seat(8),
    new Seat(9),
    new Seat(10),
]

const routes : Route[] = [
    new Route(1),
    new Route(2),
    new Route(3),
    new Route(4),
    new Route(5)
]

const airlines : Airline[] = [
    new Airline('Cambodia airline'),
    new Airline('USA airline'),
    new Airline('Japan airline'),
    new Airline('Korea airline'),
    new Airline('UK airline'),
]

const airport : Airport[] = [
    new Airport('Phnom Penh international airphort'),
    new Airport('USA international airphort'),
    new Airport('Japan international airphort'),
    new Airport('Korea international airphort'),
    new Airport('UK international airphort'),
]

const airplane : Airplane[] = [
    new Airplane('Boeing 747'),
    new Airplane('Airbus A380'),
    new Airplane('Cessna 172'),
    new Airplane('Bombardier Global 6000'),
]

const tickets: Ticket[] = [
    new Ticket(typeOfTicket.Departure,service.EconomyClassic),
    new Ticket(typeOfTicket.Departure,service.EconomyClassic),
    new Ticket(typeOfTicket.Departure,service.EconomyFlex),
    new Ticket(typeOfTicket.Departure,service.EconomyFlex),
    new Ticket(typeOfTicket.Departure,service.Business)
]

const dates: Date[] = [
    new Date(1, 1, 2024, 7),
    new Date(1, 1, 2024, 7),

    new Date(2, 2, 2024, 7),
    new Date(2, 2, 2024, 7),

    new Date(3, 3, 2024, 7),
    new Date(3, 3, 2024, 7),

    new Date(10, 4, 2024, 7),
    new Date(11, 4, 2024, 7),

    new Date(12, 5, 2024, 7),
    new Date(13, 5, 2024, 7),
  ];

const trips: Trip[] =[
    new Trip(tickets[0],'Phnom Penh Cambodia','USA Colifornia',dates[0],dates[1]),
]

const flights : Flight[] = [
    new Flight(1,dates[0],[],[],[],[],routes[0],airlines[0],airplane[0]),
]
flights[0].addPilot(pilots[0])
flights[0].addPilot(pilots[1])

flights[0].addChef(chefs[0])
flights[0].addChef(chefs[1])
flights[0].addChef(chefs[2])

flights[0].addFlightAttendant(flightAttendants[0])
flights[0].addFlightAttendant(flightAttendants[1])
flights[0].addFlightAttendant(flightAttendants[2])

flights[0].addAirportController(airportControllers[0])
flights[0].addAirportController(airportControllers[1])
flights[0].addAirportController(airportControllers[2])

const bookings : Booking[] =[
    new Booking(passengers[0],[],[],gates[0],trips[0]),
    new Booking(passengers[1],[],[],gates[2],trips[0]),
    new Booking(passengers[2],[],[],gates[2],trips[0]),
    new Booking(passengers[3],[],[],gates[2],trips[0]),
]



bookings[0].setFood(Food.Vegetarian);
bookings[0].setFood(Food.GlutenFree);
bookings[0].setSeat(seats[0])
bookings[0].setSeat(seats[1])

bookings[1].setFood(Food.GlutenFree);
bookings[1].setSeat(seats[2])

bookings[2].setFood(Food.Kosher);
bookings[2].setSeat(seats[3])
bookings[2].setSeat(seats[4])
bookings[2].setSeat(seats[5])

bookings[3].setFood(Food.Vegetarian);
bookings[3].setSeat(seats[6])

console.log('Bookers: ')
console.log(bookings);

console.log('......................')
console.log('flight: ')
console.log(flights)




