"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
class Booking {
    constructor(passenger, food, seat = [], gate, trip) {
        this.food = [];
        this.seat = [];
        this.passenger = passenger;
        this.food = food;
        this.seat = seat;
        this.gate = gate;
        this.trip = trip;
    }
    getPassenger() {
        return this.passenger;
    }
    setFood(food) {
        if (!this.food.includes(food)) {
            this.food.push(food);
        }
    }
    setSeat(seat) {
        this.seat.push(seat);
    }
    getGate() {
        return this.gate;
    }
    getTrip() {
        return this.trip;
    }
}
exports.Booking = Booking;
