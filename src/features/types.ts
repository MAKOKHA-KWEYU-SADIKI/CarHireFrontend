// types.ts
export interface Vehicle {
    id: string;
    model: string;
    date: string;
  }
  
  export interface Ticket {
    id: string;
    issue: string;
    status: string;
  }
  
  export interface Profile {
    name: string;
    id: string;
    email: string;
    bookedVehicles: Vehicle[];
    tickets: Ticket[];
  }
  