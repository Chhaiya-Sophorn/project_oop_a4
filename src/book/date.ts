export class Date{
    
   constructor(private day: number,private month: number,private year: number,private time: number){}
    getDay(){
        return this.day;
    }

    getMonth(){
        return this.month;
    }

    getYear(){
        return this.year;
    }

    getTime(){
        return this.time;
    }
}