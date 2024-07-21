
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export interface ProfileState {
  name: string;
  id: string;
  email: string;
  bookedVehicles: Vehicle[];
  tickets: Ticket[];
}

const initialState: ProfileState = {
  name: 'John Doe',
  id: '123456789',
  email: 'johndoe@example.com',
  bookedVehicles: [],
  tickets: [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    bookVehicle: (state, action: PayloadAction<Vehicle>) => {
      state.bookedVehicles.push(action.payload);
    },
    setTickets: (state, action: PayloadAction<Ticket[]>) => {
      state.tickets = action.payload;
    },
  },
});

export const { bookVehicle, setTickets } = profileSlice.actions;
export default profileSlice.reducer;
