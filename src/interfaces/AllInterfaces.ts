
// room catefory interface
export interface IRoomCategory{
    id: string;
    name: string;
    occupancy: number;
    inventory_calendar:Array<IRoomInventoryCalender>;
    rate_plans:Array<IRatePlan>
}


// RoomInventoryCalender interface

interface IRoomInventoryCalender{
    id: string;
    date: Date;
    available: number;
    status:boolean;
    booked:number
}

// IRatePlan interface

interface IRatePlan{
    id: string;
    name: string;
    calendar:Array<IRateCalendar>
}

// IRateCalendar interface

interface IRateCalendar{
    id: string;
    date: Date;
    rate: number;
    min_length_of_stay: number;
    reservation_deadline: number;
}



