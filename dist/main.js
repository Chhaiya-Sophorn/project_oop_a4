"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passenger_1 = require("./passenger/passenger");
const booking_1 = require("./book/booking");
const food_1 = require("./book/food");
const gate_1 = require("./book/gate");
const seat_1 = require("./book/seat");
const airport_controller_1 = require("./employee/staff/airport-controller");
const chef_1 = require("./employee/staff/chef");
const flight_attendant_1 = require("./employee/staff/flight-attendant");
const pilot_1 = require("./employee/staff/pilot");
const gender_1 = require("./gender");
const trip_1 = require("./book/trip/trip");
const service_1 = require("./book/ticket/service");
const ticket_1 = require("./book/ticket/ticket");
const type_1 = require("./book/ticket/type");
const date_1 = require("./book/date");
const route_1 = require("./rout/route");
const airline_1 = require("./airline/airline");
const airport_1 = require("./airport/airport");
const flight_1 = require("./flight/flight");
const airplane_1 = require("./airplane/airplane");
const passengers = [
    new passenger_1.Passenger("Chhaiya", "Sophorn", 1234567890, 9876543210, gender_1.Gender.Male),
    new passenger_1.Passenger("Thida", "Him", 2345678901, 8765432109, gender_1.Gender.Female),
    new passenger_1.Passenger("Chhunei", "Ery", 3456789012, 7654321098, gender_1.Gender.Male),
    new passenger_1.Passenger("Kaka", "Jack", 4567890123, 6543210987, gender_1.Gender.Female),
    new passenger_1.Passenger("David", "Brown", 5678901234, 5432109876, gender_1.Gender.Male),
];
const airportControllers = [
    new airport_controller_1.AirportController("Sarah", "Taylor", gender_1.Gender.Female, 5000),
    new airport_controller_1.AirportController("Robert", "Davis", gender_1.Gender.Male, 5000),
    new airport_controller_1.AirportController("Jennifer", "Wilson", gender_1.Gender.Female, 5000),
];
const chefs = [
    new chef_1.Chef("Daniel", "Anderson", gender_1.Gender.Male, 4000),
    new chef_1.Chef("Sophia", "Miller", gender_1.Gender.Female, 4000),
    new chef_1.Chef("Andrew", "Moore", gender_1.Gender.Male, 4000),
];
const flightAttendants = [
    new flight_attendant_1.FlightAttendant("Olivia", "Taylor", gender_1.Gender.Female, 3000),
    new flight_attendant_1.FlightAttendant("Matthew", "Davis", gender_1.Gender.Male, 3000),
    new flight_attendant_1.FlightAttendant("Emma", "Wilson", gender_1.Gender.Female, 3000),
];
const pilots = [
    new pilot_1.Pilot("James", "Anderson", gender_1.Gender.Male, 6000),
    new pilot_1.Pilot("Grace", "Miller", gender_1.Gender.Female, 6000),
    new pilot_1.Pilot("Henry", "Moore", gender_1.Gender.Male, 6000),
];
const gates = [
    new gate_1.Gate(1),
    new gate_1.Gate(2),
    new gate_1.Gate(3),
];
const seats = [
    new seat_1.Seat(1),
    new seat_1.Seat(2),
    new seat_1.Seat(3),
    new seat_1.Seat(4),
    new seat_1.Seat(5),
    new seat_1.Seat(6),
    new seat_1.Seat(7),
    new seat_1.Seat(8),
    new seat_1.Seat(9),
    new seat_1.Seat(10),
];
const routes = [
    new route_1.Route(1),
    new route_1.Route(2),
    new route_1.Route(3),
    new route_1.Route(4),
    new route_1.Route(5)
];
const airlines = [
    new airline_1.Airline('Cambodia airline'),
    new airline_1.Airline('USA airline'),
    new airline_1.Airline('Japan airline'),
    new airline_1.Airline('Korea airline'),
    new airline_1.Airline('UK airline'),
];
const airport = [
    new airport_1.Airport('Phnom Penh international airphort'),
    new airport_1.Airport('USA international airphort'),
    new airport_1.Airport('Japan international airphort'),
    new airport_1.Airport('Korea international airphort'),
    new airport_1.Airport('UK international airphort'),
];
const airplane = [
    new airplane_1.Airplane('Boeing 747'),
    new airplane_1.Airplane('Airbus A380'),
    new airplane_1.Airplane('Cessna 172'),
    new airplane_1.Airplane('Bombardier Global 6000'),
];
const tickets = [
    new ticket_1.Ticket(type_1.typeOfTicket.Departure, service_1.service.EconomyClassic),
    new ticket_1.Ticket(type_1.typeOfTicket.Departure, service_1.service.EconomyClassic),
    new ticket_1.Ticket(type_1.typeOfTicket.Departure, service_1.service.EconomyFlex),
    new ticket_1.Ticket(type_1.typeOfTicket.Departure, service_1.service.EconomyFlex),
    new ticket_1.Ticket(type_1.typeOfTicket.Departure, service_1.service.Business)
];
const dates = [
    new date_1.Date(1, 1, 2024, 7),
    new date_1.Date(1, 1, 2024, 7),
    new date_1.Date(2, 2, 2024, 7),
    new date_1.Date(2, 2, 2024, 7),
    new date_1.Date(3, 3, 2024, 7),
    new date_1.Date(3, 3, 2024, 7),
    new date_1.Date(10, 4, 2024, 7),
    new date_1.Date(11, 4, 2024, 7),
    new date_1.Date(12, 5, 2024, 7),
    new date_1.Date(13, 5, 2024, 7),
];
const trips = [
    new trip_1.Trip(tickets[0], 'Phnom Penh Cambodia', 'USA Colifornia', dates[0], dates[1]),
];
const flights = [
    new flight_1.Flight(1, dates[0], [], [], [], [], routes[0], airlines[0], airplane[0]),
];
flights[0].addPilot(pilots[0]);
flights[0].addPilot(pilots[1]);
flights[0].addChef(chefs[0]);
flights[0].addChef(chefs[1]);
flights[0].addChef(chefs[2]);
flights[0].addFlightAttendant(flightAttendants[0]);
flights[0].addFlightAttendant(flightAttendants[1]);
flights[0].addFlightAttendant(flightAttendants[2]);
flights[0].addAirportController(airportControllers[0]);
flights[0].addAirportController(airportControllers[1]);
flights[0].addAirportController(airportControllers[2]);
const bookings = [
    new booking_1.Booking(passengers[0], [], [], gates[0], trips[0]),
    new booking_1.Booking(passengers[1], [], [], gates[2], trips[0]),
    new booking_1.Booking(passengers[2], [], [], gates[2], trips[0]),
    new booking_1.Booking(passengers[3], [], [], gates[2], trips[0]),
];
bookings[0].setFood(food_1.Food.Vegetarian);
bookings[0].setFood(food_1.Food.GlutenFree);
bookings[0].setSeat(seats[0]);
bookings[0].setSeat(seats[1]);
bookings[1].setFood(food_1.Food.GlutenFree);
bookings[1].setSeat(seats[2]);
bookings[2].setFood(food_1.Food.Kosher);
bookings[2].setSeat(seats[3]);
bookings[2].setSeat(seats[4]);
bookings[2].setSeat(seats[5]);
bookings[3].setFood(food_1.Food.Vegetarian);
bookings[3].setSeat(seats[6]);
console.log('Bookers: ');
console.log(bookings);
console.log('......................');
console.log('flight: ');
console.log(flights);
