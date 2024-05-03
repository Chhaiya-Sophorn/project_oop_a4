"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Date = void 0;
class Date {
    constructor(day, month, year, time) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.time = time;
    }
    getDay() {
        return this.day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }
    getTime() {
        return this.time;
    }
}
exports.Date = Date;
