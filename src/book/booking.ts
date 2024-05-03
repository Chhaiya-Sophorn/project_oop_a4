import { Passenger } from "../passenger/passenger";
import { Gate } from "./gate";
import { Seat } from "./seat";
import { Food } from "./food";
import { Trip } from "./trip/trip";

export class Booking {
    passenger: Passenger;
    food: Food[] = [];
    seat: Seat[] = [];
    gate: Gate;
    trip:Trip;

    constructor(passenger: Passenger, food: Food[], seat: Seat[] = [], gate: Gate, trip:Trip) {
        this.passenger = passenger;
        this.food = food;
        this.seat = seat;
        this.gate = gate;
        this.trip = trip;
    }

    getPassenger(): Passenger {
        return this.passenger;
    }

    setFood(food: Food): void {
        if (!this.food.includes(food)) {
            this.food.push(food)
        }
    }

    setSeat(seat: Seat): void {
        this.seat.push(seat);
    }

    getGate(): Gate {
        return this.gate;
    }

    getTrip(): Trip {
        return this.trip;
    }
}