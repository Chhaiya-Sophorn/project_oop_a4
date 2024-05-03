import { Ticket } from "../ticket/ticket";
import { Date } from "../date";

export class Trip {
    ticket: Ticket;
    departureTrip:string;
    destinationTrip:string;
    departureDate: Date;
    arriceDate: Date;

    constructor(ticket: Ticket,departureTrip:string,destinationTrip:string,departureDate:Date,arriceDate:Date) {}
    getTick():Ticket{
        return this.ticket;
    }

    getDpartureTrip():string{
        return this.destinationTrip;
    }
    
    getDestinationTrip():string{
        return this.destinationTrip;
    }

    getDepartureDate():Date{
        return this.departureDate;
    }

    getArrivalDate():Date{
        return this.arriceDate;
    } 

}

